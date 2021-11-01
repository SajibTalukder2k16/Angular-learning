import { Component, ElementRef, OnInit,Output, ViewChild,EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
 

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;

  @Output() ingredientsAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
    //console.log("fjsfjk");
  }
  onAddItem()
  {
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    //console.log("Sfskfj: ",name,"skfjskfj")
    const newIngredient = new Ingredient(name,amount);
    this.ingredientsAdded.emit(newIngredient);
    //console.log(newIngredient);
  }

}
