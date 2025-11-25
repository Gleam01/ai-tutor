/*!
 * @license
 * Copyright 2025 Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { MOCK_RECIPES } from './mock-recipes';
import { RecipeModel } from './models';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected recipe = signal<RecipeModel>(MOCK_RECIPES[0]);

  protected displaySpaghettiCarbonara() {
    this.recipe.set(MOCK_RECIPES[0]);
  }

  protected displayCapreseSalad() {
    this.recipe.set(MOCK_RECIPES[1]);
  }
}

