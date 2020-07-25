import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Recipe } from './recipe.model';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from './recipe.service';

@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<Recipe[]> {
  // No need to subscribe because the resolver will do it to find out once the data is there
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipesService.getRecipes();

    return recipes.length === 0
      ? this.dataStorageService.fetchRecipes()
      : recipes;
  }

  constructor(
    private dataStorageService: DataStorageService,
    private recipesService: RecipeService
  ) {}
}

/**
 * @Resolver
 * is use to fetch data at the same state when the page is reload, pretty useful when edit some forms
 * or viewing details of items.
 *
 * For Using this :
 * ----------------
 * use tap in pipe response request
 * subscribe in component
 * dont forget to use option in appRoutes array
 *
 * */
