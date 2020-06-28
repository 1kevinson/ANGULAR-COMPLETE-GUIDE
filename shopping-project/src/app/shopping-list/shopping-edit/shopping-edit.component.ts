import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  @ViewChild('nameInput') IngredientNameInput: ElementRef;
  @ViewChild('amountInput') IngredientAmountInput: ElementRef;

  addIngredient() {
    this.shoppingListService.onIngredientAdded(
      this.IngredientNameInput.nativeElement.value,
      this.IngredientAmountInput.nativeElement.value
    );
  }
}
