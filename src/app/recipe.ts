import { Injectable } from '@angular/core';
import { RecipeModel } from './models';
import { MOCK_RECIPES } from './mock-recipes';

@Injectable({
  providedIn: 'root',
})
export class Recipe {
  private readonly RECIPES_KEY = 'recipes';
  
  constructor() {
    localStorage.setItem(this.RECIPES_KEY, JSON.stringify(MOCK_RECIPES));
  }

  getRecipesList(): RecipeModel[] {
    const recipes = localStorage.getItem(this.RECIPES_KEY);
    return recipes ? JSON.parse(recipes) : [];
  }

  getRecipeById(id: number): RecipeModel {
    return this.getRecipesList().find((recipe) => recipe.id === id)!;
  }

  private getNextId(): number {
    return Math.max(...this.getRecipesList().map((recipe) => recipe.id)) + 1;
  }

  addRecipe(recipe: RecipeModel): void {
    const recipes = this.getRecipesList();
    recipes.push({
      ...recipe,
      id: this.getNextId()
    });
    localStorage.setItem(this.RECIPES_KEY, JSON.stringify(recipes));
  }
}
