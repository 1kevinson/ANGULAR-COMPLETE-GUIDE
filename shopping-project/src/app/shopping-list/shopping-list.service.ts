import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  // Add observale Subject
  IngredientCreated = new Subject<Ingredient[]>();

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
    const newIng = new Ingredient(ingName, ingAmount);
    this.ingredients.push(newIng);
    this.IngredientCreated.next(this.ingredients.slice());
  }

  onIngredientsAdded(ingredientsAdded: Ingredient[]) {
    this.ingredients.push(...ingredientsAdded);
    this.IngredientCreated.next(this.ingredients.slice());
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.IngredientCreated.next(this.ingredients.slice());
  }
}
