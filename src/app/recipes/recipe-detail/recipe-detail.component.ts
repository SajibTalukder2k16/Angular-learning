import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm)
  {
    console.log(form);
    console.log("Submitted");
  }
}
