import { Component, ElementRef, EventEmitter, Output, ViewChild, output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.scss'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: true }) nameInput?: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInput?: ElementRef;
  @Output() addIngredientHandler = new EventEmitter();

  add(): void {
    this.addIngredientHandler.emit({
      name: this.nameInput?.nativeElement.value,
      amount: this.amountInput?.nativeElement.value
    })
  }

  clear(): void {
    if (this.nameInput && this.nameInput.nativeElement) {
      this.nameInput.nativeElement.value = null;
    }
    if (this.amountInput && this.amountInput.nativeElement) {
      this.amountInput.nativeElement.value = null;
    }
  }
}
