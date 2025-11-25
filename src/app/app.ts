/*!
 * @license
 * Copyright 2025 Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import {Component, computed, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { MOCK_RECIPES } from './mock-recipes';
import { Ingredient, RecipeModel } from './models';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
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

