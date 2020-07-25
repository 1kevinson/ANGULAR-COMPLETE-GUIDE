import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

// Add @Injectable it as soon we have to inject a service into this service
@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://ng-course-recipe-book-3ae65.firebaseio.com/recipe.json',
        recipes
      )
      .subscribe((response) => console.log(response));
  }

  fetchRecipes() {
    // <> use to inform about the type of the response
    this.http
      .get<Recipe[]>(
        'https://ng-course-recipe-book-3ae65.firebaseio.com/recipe.json'
      )
      .subscribe((recipes) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
