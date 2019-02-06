import { Component, OnInit } from '@angular/core';
import { RecipeApiService } from '../recipe-api.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
  providers: [ RecipeApiService ]
})

export class RecipeFormComponent implements OnInit {
  healths: Preference = [
    {"code": "vegan", "name": "Vegan", "checked": false},
    {"code": "vegetarian", "name": "Vegetarian", "checked": false},
    {"code": "peanut-free", "name": "Peanut free", "checked": false},
    {"code": "tree-nut-free", "name": "Tree nut free", "checked": false},
    {"code": "sugar-conscious", "name": "Sugar conscious", "checked": false},
    {"code": "alcohol-free", "name": "Alcohol free", "checked": false}
  ];

  diets: Preference = [
    {"code": "high-protein", "name": "High protein", "checked": false},
    {"code": "low-fat", "name": "Low fat", "checked": false},
    {"code": "low-carb", "name": "Low carb", "checked": false},
  ]
  apiDiet: string[] = [];
  apiHealth: string[] = [];
  private responseApi: Object;

  constructor(private recipeApiService: RecipeApiService) { }
    recipes: any[] = null;

  ngOnInit() {
  }

  updatePref(value, prefArray){
    for(let i = 0; i < prefArray.length; i++){
      if(prefArray[i].code === value){
        prefArray[i].checked = !prefArray[i].checked;
      }
    }
    console.log("checked " + prefArray);
  }

  createPreferencesArray(finalPref: string[], preferenceCheck: Preference ){
    for(let i = 0; i < preferenceCheck.length; i++){
      if(preferenceCheck[i].checked === true) {
        finalPref.push(preferenceCheck[i].code)
      }
    }
    return finalPref;
  }

  findEmptyValues(preferenceCode: string[]){
    let preferenceCodeStr: string = null;
    if(preferenceCode.length !== 0){
      preferenceCodeStr = preferenceCode.join(',')
    }
    return preferenceCodeStr;
  }

  getRecipes(ingredients: string, health: string, diet: string)  {
    this.recipes = [];
    this.recipeApiService.getByIngredients(ingredients, health, diet).subscribe(response => {
      this.recipes = response.json().hits;
      console.log(this.recipes);
    });
  }

  createApiCode(ingredients: string) {
    this.apiDiet = [];
    this.apiHealth = [];
    let regex = /\s/gi;
    let result = ingredients.replace(regex, '+');
    const dietCode: string[] = this.createPreferencesArray(this.apiDiet, this.diets);
    const dietCodeStr: string = this.findEmptyValues(dietCode);
    const healthCode: string[] = this.createPreferencesArray(this.apiHealth, this.healths);
    const healthCodeStr: string = this.findEmptyValues(healthCode);
    this.getRecipes(result, healthCodeStr, dietCodeStr);
  }
}

type Preference = Array<{code: string, name: string, checked: boolean}>;
