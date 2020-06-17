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
      'https://www.foodiecrush.com/wp-content/uploads/2019/07/Pomodoro-Sauce-foodiecrush.com-015.jpg'
    ),
    new Recipe(
      'A test recipe',
      'Simple test',
      'https://images.kglobalservices.com/www.ricekrispies.com/en_us/recipe/kicrecipe-1605/' +
        'recipe-gallery_img-5035195_recip_img-7547320_holiday_kabobs_-_rice_krispies-011.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
