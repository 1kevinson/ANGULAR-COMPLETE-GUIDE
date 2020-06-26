import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @ViewChild('nameInput') IngredientNameInput: ElementRef;
  @ViewChild('amountInput') IngredientAmountInput: ElementRef;

  @Output('createIngredient') IngredientWasCreated = new EventEmitter<
    Ingredient
  >();

  addIngredient() {
    const ingName = this.IngredientNameInput.nativeElement.value;
    const ingAmount = this.IngredientAmountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);

    this.IngredientWasCreated.emit(newIngredient);
  }
}
