import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe!:Recipe
  rec!:Recipe
  id!:number

  constructor(private recipeService:RecipeService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.recipe = this.recipeService.getId(this.id);
      }
    )
  }
  onSubmit(form:NgForm)
  {
    console.log(form);
    console.log("Submitted");
  }
}
