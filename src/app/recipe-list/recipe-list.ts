import { Component, computed, signal } from '@angular/core';
import { MOCK_RECIPES } from '../mock-recipes';
import { Ingredient, RecipeModel } from '../models';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  imports: [JsonPipe],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  protected recipe = signal<RecipeModel>(MOCK_RECIPES[0]);
  protected servings = signal(1);
  protected adjustedIngredients = computed<Ingredient[]>(() => {
    return this.recipe().ingredients.map(ingredient => {
      return {
        ...ingredient,
        quantity: ingredient.quantity * this.servings()
      }
    })
  });

  protected displaySpaghettiCarbonara() {
    this.recipe.set(MOCK_RECIPES[0]);
  }

  protected displayCapreseSalad() {
    this.recipe.set(MOCK_RECIPES[1]);
  }

  protected incrementServings() {
    this.servings.update(s => s + 1)
  }

  protected decrementServings() {
    this.servings.update(s => s - 1)
  }
}
