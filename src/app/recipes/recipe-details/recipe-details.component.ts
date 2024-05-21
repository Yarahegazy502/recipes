import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.scss'
})
export class RecipeDetailsComponent {
  recipe: Recipe = {};
  constructor(
    private config: DynamicDialogConfig
  ) { }

  ngOnInit(): void {
    this.recipe = this.config.data;
  }
}
