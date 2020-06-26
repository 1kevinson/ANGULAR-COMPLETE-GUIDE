import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  //Emit event with Recipe as type
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  //the type is array of recipes
  recipes: Recipe[] = [
    new Recipe(
      'Recette Poulet DG',
      'Plantains & poulet',
      'https://blog.aperaf.com/wp-content/uploads/2019/08/Poulet-DG-1-1-1024x683.jpg'
    ),
    new Recipe(
      'Recette boeuf bourgignon',
      'Boeuf et pommes',
      'https://cdn.pratico-pratiques.com/app/uploads/sites/' +
        '3/2018/08/20185521/boeuf-bourguignon-1.jpeg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
