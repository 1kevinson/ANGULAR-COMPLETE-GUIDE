import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 4),
    new Ingredient('Eggs', 3),
  ];

  constructor() {}

  ngOnInit(): void {}

  onIngredientCreated($event: { name: string; amount: number }) {
    this.ingredients.push({
      name: $event.name,
      amount: $event.amount,
    });
  }
}
