import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  check="Custom Pipe checking";
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes!:Recipe[];
  index!:number;
  
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipes =this.recipeService.getRecipes();
  }
  onRecipeSelected(recipe:Recipe)   
  {
    this.recipeWasSelected.emit(recipe);

  }

}
