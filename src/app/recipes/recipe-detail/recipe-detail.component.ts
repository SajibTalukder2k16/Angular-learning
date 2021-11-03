import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  constructor(private recipeService:RecipeService,private activatedRoute:ActivatedRoute,private router:Router) { }

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
  OnclickEdit()
  {
    //this.router.navigate(['edit'],{relativeTo:this.activatedRoute})
    this.router.navigate(['../',this.id,'edit'],{relativeTo:this.activatedRoute});
  }
}
