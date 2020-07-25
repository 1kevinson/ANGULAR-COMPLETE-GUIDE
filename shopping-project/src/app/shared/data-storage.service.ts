import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { log } from 'util';

// Add @Injectable it as soon we have to inject a service into this service
@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://ng-course-recipe-book-3ae65.firebaseio.com/recipe.json',
        recipes,
      )
      .subscribe((response) => console.log(response));
  }

  fetchRecipes() {

  }
}
