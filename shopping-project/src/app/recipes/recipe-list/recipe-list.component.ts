import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  //the type is array of recipes
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'Simple test',
      'https://encrypted-tbn0.gstatic.com/' +
        'images?q=tbn%3AANd9GcRkMlCFxZBelYVN6X6BOs3F_wx8CxgEJN_MtaiH8QKmXHSchoSI&usqp=CAU'
    ),
    new Recipe(
      'A test recipe',
      'Simple test',
      'https://encrypted-tbn0.gstatic.com/' +
        'images?q=tbn%3AANd9GcRkMlCFxZBelYVN6X6BOs3F_wx8CxgEJN_MtaiH8QKmXHSchoSI&usqp=CAU'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
