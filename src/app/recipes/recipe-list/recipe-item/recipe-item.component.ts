import { RecipeDetailsComponent } from '../../recipe-details/recipe-details.component';
import { DialogService } from 'primeng/dynamicdialog';
import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss',
  providers: [DialogService]
})
export class RecipeItemComponent {
  @Input() recipe: Recipe = {};

  constructor(
    public dialogService: DialogService
  ) { }

  showDetails(): void {
    const ref = this.dialogService.open(RecipeDetailsComponent, {
      header: 'Recipe Details',
      data: this.recipe,
      width: '65%',
      breakpoints: {
        '960px': '75%',
        '640px': '90%'
      },
    });
  }
}
