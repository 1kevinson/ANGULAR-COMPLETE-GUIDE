import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

// Add @Injectable it as soon we have to inject a service into this service
@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

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
    return this.authService.user.pipe(
      // take is a function that allow us to take data once (on demand) and don't need to manually unscubscribe
      take(1),
      exhaustMap((user) => {
        return this.http.get<Recipe[]>( // <> use to inform about the type of the response, because 'get' is a generic type
          'https://ng-course-recipe-book-3ae65.firebaseio.com/recipe.json',
          {
            params: new HttpParams().set('auth', user.token),
          }
        );
      }),
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      tap((recipes) => {
        // write code without altered data retrieved by http request : IMPORTANT TO DO THIS BEFORE SUBSCRIBE IN COMPONENT.TS
        this.recipeService.setRecipes(recipes);
      })
    );
  }
}
