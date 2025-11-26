import { Component, inject, signal } from '@angular/core';
import { RecipeModel } from '../models';
import { Recipe } from '../recipe';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  private readonly recipeService = inject(Recipe);
  private recipesList = this.recipeService.getRecipesList()
  protected recipes = signal<RecipeModel[]>(this.recipesList);
}
