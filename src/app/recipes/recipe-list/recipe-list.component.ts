import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent {
  isLoading: boolean = false;

  recipes: Recipe[] = [
    new Recipe('First Recipe', 'voluptatibus non Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestiae', 'assets/images/1.jpg', ['Onion', 'Lettuce', 'Tomatoe', 'Patty']),
    new Recipe('Second Recipe', 'pariatur unde Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestiae', 'assets/images/2.jpg', ['Lettuce', 'Tomatoe', 'Patty']),
    new Recipe('Third Recipe', ' Harum vero cupiditate iure! Repudiandae tempora architecto ipsam! Alias laborum atque cum, ipsam amet nostrum?', 'assets/images/3.jpg', ['Onion', 'Lettuce', 'Tomatoe', 'Patty', 'Onion', 'Lettuce',]),
    new Recipe('Fourth Recipe', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestiae', 'assets/images/4.jpg', ['Patty', 'oil', 'tomato']),
    new Recipe('Fifth Recipe', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestiae', 'assets/images/5.jpg', ['Lettuce', 'Tomatoe', 'Patty']),
    new Recipe('six Recipe', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestiae', 'assets/images/recipe.jpg', ['Onion', 'Lettuce', 'Tomatoe', 'Patty', 'Onion']),
    new Recipe('Seventh Recipe', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestiae', 'assets/images/6.jpg', ['Patty', 'Onion', 'Lettuce', 'Tomatoe', 'Patty']),
    new Recipe('eight Recipe', 'Harum vero cupiditate iure! Repudiandae tempora architecto ipsam! Alias laborum atque cum, ipsam amet nostrum?', 'assets/images/7.jpg', ['Lettuce', 'Onion', 'Patty']),
  ];

  ngOnInit(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
