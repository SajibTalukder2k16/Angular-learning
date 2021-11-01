import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  check="Custom Pipe checking";
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes:Recipe[]=[
    new Recipe("Burger","Delicious","https://insanelygoodrecipes.com/wp-content/uploads/2020/05/Burger-with-fries.webp"),
    new Recipe("Coffee","Cappuccino","https://www.coffeeaddress.com/file/manual/CA_Home_Coffee_in_cafe@2x.png")
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe:Recipe)   
  {
    this.recipeWasSelected.emit(recipe);

  }

}
