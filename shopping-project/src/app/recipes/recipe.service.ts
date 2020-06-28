import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  //the type is array of recipes
  private recipes: Recipe[] = [
    new Recipe(
      'Recette Poulet DG',
      'Food from cameroon | Douala',
      'https://www.preciouscore.com/wp-content/' +
        'uploads/2016/03/Poulet-DG-Recipe.jpg',
      [new Ingredient('chicken', 2), new Ingredient('tomatoes', 5)]
    ),
    new Recipe(
      'Recette boeuf bourgignon',
      'Food from France | Paris',
      'https://cdn.pratico-pratiques.com/app/uploads/sites/' +
        '3/2018/08/20185521/boeuf-bourguignon-1.jpeg',
      [new Ingredient('beef', 1 / 2), new Ingredient('onions', 4)]
    ),
    new Recipe(
      'Tarte au citron',
      'Foos from England | Manchester',
      'https://cache.magazine-avantages.fr/data/photo/' +
        'w800_c18/3z/tarteaucitron61195p1.jpg',
      [new Ingredient('lemons', 4 / 3), new Ingredient('apples', 2)]
    ),
  ];

  getRecipes() {
    console.log(this.recipes);
    console.log(this.recipes.slice());
    // .slice() return a copy of the recipe array
    return this.recipes.slice();
  }
}
