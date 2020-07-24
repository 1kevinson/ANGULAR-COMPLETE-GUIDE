import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  // Add observale Subject
  IngredientCreated = new Subject<Ingredient[]>();
  // Subject created to trigger every item that will be selected
  startEditing = new Subject<number>();

  // Define array of ingredients
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 4),
    new Ingredient('Eggs', 3),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  onIngredientsAdded(ingredientsAdded: Ingredient[]) {
    this.ingredients.push(...ingredientsAdded);
    this.IngredientCreated.next(this.ingredients.slice());
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.IngredientCreated.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.IngredientCreated.next(this.ingredients.slice());
  }
}
