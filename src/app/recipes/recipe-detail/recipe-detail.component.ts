import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe!:Recipe
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm)
  {
    console.log(form);
    console.log("Submitted");
  }
}
