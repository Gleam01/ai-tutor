import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Recipe } from '../recipe';
import { Ingredient } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  imports: [ReactiveFormsModule],
  templateUrl: './add-recipe.html',
  styleUrl: './add-recipe.css',
})
export class AddRecipe {
  private readonly fb = inject(FormBuilder);
  private readonly recipeService = inject(Recipe);
  private readonly router = inject(Router);

  protected readonly recipeForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
  });

  onSubmit(): void {
    if (this.recipeForm.valid) {
      this.recipeService.addRecipe({
        id: 0,
        name: this.recipeForm.get('name')?.value!,
        description: this.recipeForm.get('description')?.value!,
        imgUrl: `https://placehold.co/300x200.png?text=${this.getPlaceholdText()}`,
        isFavorite: false,
        ingredients: <Ingredient[]>[]
      });
      this.router.navigate(['/recipes'])
    }
  }

  private getPlaceholdText(): string {
    return this.recipeForm.get('name')?.value?.replaceAll(' ', '+')!;
  }
}
