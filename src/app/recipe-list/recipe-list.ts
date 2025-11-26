import { Component, inject, signal } from '@angular/core';
import { RecipeModel } from '../models';
import { RecipeDetail } from '../recipe-detail/recipe-detail';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeDetail],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  private readonly recipeService = inject(Recipe);
  private recipesList = this.recipeService.getRecipesList()
  protected recipe = signal<RecipeModel>(this.recipesList[0]);

  protected displaySpaghettiCarbonara() {
    this.recipe.set(this.recipesList[0]);
  }

  protected displayCapreseSalad() {
    this.recipe.set(this.recipesList[1]);
  }
}
