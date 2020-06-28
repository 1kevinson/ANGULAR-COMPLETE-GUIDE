import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  //the type is array of recipes
  private recipes: Recipe[] = [
    new Recipe(
      'Recette Poulet DG',
      'Plantains & poulet',
      'https://www.preciouscore.com/wp-content/' +
        'uploads/2016/03/Poulet-DG-Recipe.jpg'
    ),
    new Recipe(
      'Recette boeuf bourgignon',
      'Boeuf et pommes',
      'https://cdn.pratico-pratiques.com/app/uploads/sites/' +
        '3/2018/08/20185521/boeuf-bourguignon-1.jpeg'
    ),
    new Recipe(
      'Tarte au citron',
      'citron et tarte',
      'https://cache.magazine-avantages.fr/data/photo/' +
        'w800_c18/3z/tarteaucitron61195p1.jpg'
    ),
  ];

  getRecipes() {
    // .slice() return a copy of the recipe array
    return this.recipes.slice();
  }
}
