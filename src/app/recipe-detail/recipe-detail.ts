import { Component, signal, computed, input } from '@angular/core';
import { Ingredient, RecipeModel } from '../models';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  imports: [JsonPipe],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {
  recipe = input.required<RecipeModel>();
  protected servings = signal(1);
  protected adjustedIngredients = computed<Ingredient[]>(() => {
    return this.recipe().ingredients.map(ingredient => {
      return {
        ...ingredient,
        quantity: ingredient.quantity * this.servings()
      }
    })
  });

  protected incrementServings() {
    this.servings.update(s => s + 1)
  }

  protected decrementServings() {
    this.servings.update(s => s - 1)
  }
}
