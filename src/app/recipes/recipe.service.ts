import { Recipe } from "./recipe.model";
export class RecipeService{
    private recipes:Recipe[]=[
        new Recipe("Burger","Delicious","https://insanelygoodrecipes.com/wp-content/uploads/2020/05/Burger-with-fries.webp"),
        new Recipe("Coffee","Cappuccino","https://www.coffeeaddress.com/file/manual/CA_Home_Coffee_in_cafe@2x.png")
      ];
    getRecipes()
    {
        return this.recipes.slice();
    }
    getId(index:number)
    {
        return this.recipes[index];
    }
}