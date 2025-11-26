import { Component, signal } from '@angular/core';
import { MOCK_RECIPES } from '../mock-recipes';
import { RecipeModel } from '../models';
import { RecipeDetail } from '../recipe-detail/recipe-detail';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeDetail],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  protected recipe = signal<RecipeModel>(MOCK_RECIPES[0]);

  protected displaySpaghettiCarbonara() {
    this.recipe.set(MOCK_RECIPES[0]);
  }

  protected displayCapreseSalad() {
    this.recipe.set(MOCK_RECIPES[1]);
  }
}
