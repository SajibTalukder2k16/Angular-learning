import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  check="Custom Pipe checking";
  recipes:Recipe[]=[
    new Recipe("Burger","Delicious","https://insanelygoodrecipes.com/wp-content/uploads/2020/05/Burger-with-fries.webp"),
    new Recipe("Burger","Delicious","https://insanelygoodrecipes.com/wp-content/uploads/2020/05/Burger-with-fries.webp")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
