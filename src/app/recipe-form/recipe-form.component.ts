import { Component, OnInit } from '@angular/core';
import { RecipeApiService } from '../recipe-api.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
  providers: [RecipeApiService]
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

  ngOnInit() {
  }

  updateDiet(value) {
    for (let i = 0; i < this.diets.length; i++) {
      if (this.diets[i].code === value) {
        this.diets[i].checked = !this.diets[i].checked;
      }
    }
    console.log("diets" + this.diets);
  }

  updateHealth(value) {
    for (let i = 0; i < this.healths.length; i++) {
      if (this.healths[i].code === value) {
        this.healths[i].checked = !this.healths[i].checked;
      }
    }
    console.log("healths" + this.healths);
  }
  //
  // createDietCode(){
  //   this.apiDiet = [];
  //   for (let i = 0; i < this.diets.length; i++) {
  //     if (this.diets[i].checked === true) {
  //       this.apiDiet.push(this.diets[i].code)
  //     }
  //   }
  //   console.log("Diet: " + this.apiDiet);
  //   return this.apiDiet;
  // }
  //
  // createHealthCode(){
  //   this.apiHealth = [];
  //   for (let i = 0; i < this.healths.length; i++) {
  //     if (this.healths[i].checked === true) {
  //       this.apiHealth.push(this.healths[i].code)
  //     }
  //   }
  //   console.log("Health: " + this.apiHealth);
  //   return this.apiHealth;
  // }

  createPreferencesArray(finalPref: string[], preferenceCheck: Preference ){
    for(let i = 0; i < preferenceCheck.length; i++){
      if(preferenceCheck[i].checked === true) {
        finalPref.push(preferenceCheck[i].code)
      }
    }
    return finalPref;
  }



  createApiCode(ingredients: string) {
    let regex = /\s/gi;
    let dietCodeStr: string;
    let healthCodeStr: string;

    const dietCode: string[] = this.createPreferencesArray(this.apiDiet, this.diets);
    if(dietCode.length === 0){
      dietCodeStr = null;
    } else {
      dietCodeStr = dietCode.join(",");
    }

    const healthCode: string[] = this.createPreferencesArray(this.apiHealth, this.healths);
    if(healthCode.length === 0){
      healthCodeStr = null;
    } else {
      healthCodeStr = healthCode.join(",");
    }

    console.log(ingredients);
    let result = ingredients.replace(regex, '+');
    console.log(result);

    this.getRecipes(result, healthCodeStr, dietCodeStr);
  }

  getRecipes(ingredients: string, health: string, diet: string)  {
    this.recipeApiService.getByIngredients(ingredients, health, diet).subscribe(response => {
      this.responseApi = response.json();
      console.log(this.responseApi);
    });
  }

}

type Preference = Array<{code: string, name: string, checked: boolean}>;
