import { Component, OnDestroy, OnInit } from '@angular/core';

import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editedMode = false;
  editedItemIndex: number;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    // store the subscription in case of destroying component
    this.subscription = this.shoppingListService.startEditing.subscribe(
      (index: number) => {
        this.editedMode = true;
        this.editedItemIndex = index;
      }
    );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const ingredient = new Ingredient(value.name, value.amount);
    this.shoppingListService.addIngredient(ingredient);
  }

  // Clear the subscription
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
