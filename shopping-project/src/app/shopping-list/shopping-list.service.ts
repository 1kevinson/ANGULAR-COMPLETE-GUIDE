import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  IngredientCreated = new EventEmitter<Ingredient>();

  // Define array of ingredients
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 4),
    new Ingredient('Eggs', 3),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  onIngredientAdded(ingName: string, ingAmount: number) {
    return new Ingredient(ingName, ingAmount);
  }
}
