import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() recipe: Recipe;

  log(val) {
    console.table(val);
  }
}
