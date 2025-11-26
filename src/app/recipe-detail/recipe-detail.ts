import { Component, signal, computed, input, inject } from '@angular/core';
import { Ingredient, RecipeModel } from '../models';
import { FormsModule } from '@angular/forms';
import { Recipe } from '../recipe';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-recipe-detail',
  imports: [FormsModule],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {
  private readonly recipeService = inject(Recipe);
  private readonly route = inject(ActivatedRoute);
  private recipeId = signal<number>(+(toSignal(this.route.params)()?.['id']));

  recipe = signal<RecipeModel>(this.recipeService.getRecipeById(this.recipeId()));
  protected servings = signal(1);
  protected adjustedIngredients = computed<Ingredient[]>(() => {
    return this.recipe().ingredients.map(ingredient => {
      return {
        ...ingredient,
        quantity: ingredient.quantity * this.servings()
      }
    })
  });
  searchTerm = signal('');
  filteredIngredients = computed<Ingredient[]>(() => {
    return this.adjustedIngredients().filter(ingredient => {
      return ingredient.name.toLowerCase().includes(this.searchTerm().toLowerCase());
    });
  });

  protected incrementServings() {
    this.servings.update(s => s + 1)
  }

  protected decrementServings() {
    this.servings.update(s => s - 1)
  }
}
