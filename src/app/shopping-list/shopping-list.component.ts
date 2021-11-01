import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[]=[
    new Ingredient('Apple',10),
    new Ingredient('Orange',20)
  ];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  OnclickRecipe()
  {
    //console.log("sajib")
    this.router.navigate(['/recipes']);
  }
  onAdded(ingredient:Ingredient)
  {
    //console.log("Hellos")
    this.ingredients.push(ingredient);
    //console.log(this.ingredients.length);
  }

}
