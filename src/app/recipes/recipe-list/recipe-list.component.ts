import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  
  constructor(private recipeService:RecipeService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.recipes =this.recipeService.getRecipes();
  }
  onRecipeSelected(recipe:Recipe)   
  {
    this.recipeWasSelected.emit(recipe);

  }
  onClickNew()
  {
    this.router.navigate(['new'],{relativeTo:this.route});
  }

}
