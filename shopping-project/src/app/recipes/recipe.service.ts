import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// Injectable is a decorator use for dependency injection
@Injectable()
export class RecipeService {
  // Observable for changed Recipes
  RecipeChanged = new Subject<Recipe[]>();

  //the type is array of recipes
  private recipes: Recipe[] = [
    new Recipe(
      'Recette Poulet DG',
      'Food from cameroon | Douala',
      'https://www.preciouscore.com/wp-content/' +
        'uploads/2016/03/Poulet-DG-Recipe.jpg',
      [
        new Ingredient('oil', 7),
        new Ingredient('chicken', 2),
        new Ingredient('tomatoes', 5),
      ]
    ),
    new Recipe(
      'Recette boeuf bourgignon',
      'Food from France | Paris',
      'https://cdn.pratico-pratiques.com/app/uploads/sites/' +
        '3/2018/08/20185521/boeuf-bourguignon-1.jpeg',
      [new Ingredient('beef', 9), new Ingredient('onions', 4)]
    ),
    new Recipe(
      'Tarte au citron',
      'Foos from England | Manchester',
      'https://cache.magazine-avantages.fr/data/photo/' +
        'w800_c18/3z/tarteaucitron61195p1.jpg',
      [new Ingredient('lemons', 6), new Ingredient('apples', 2)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    // .slice() return a copy of the recipe array
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.onIngredientsAdded(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.RecipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.RecipeChanged.next(this.recipes.slice());
  }
}
