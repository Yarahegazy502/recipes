import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('pizza', 40),
    new Ingredient('pizza', 40),
    new Ingredient('pizza', 40),
    new Ingredient('pizza', 40),
  ];

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
  }
}
