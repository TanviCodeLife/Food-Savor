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
  constructor() { }

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

  // updatePreference(value){
  //   for (let i = 0; i < this.preferences.length; i++) {
  //     if (this.preferences[i].code === value) {
  //       this.preferences[i].checked = !this.preferences[i].checked;
  //     }
  //   }
  //   console.log("preferences" + this.preferences);
  // }

  createApiCode() {
    this.apiDiet = [];
    this.apiHealth = [];
    for (let i = 0; i < this.diets.length; i++) {
      if (this.diets[i].checked === true) {
        this.apiDiet.push(this.diets[i].code)
      }
    }
    console.log("Diet: " + this.apiDiet);

    for (let i = 0; i < this.healths.length; i++) {
      if (this.healths[i].checked === true) {
        this.apiHealth.push(this.healths[i].code)
      }
    }
    console.log("Health: " + this.apiHealth);
  }

}

type Preference = Array<{code: string, name: string, checked: boolean}>;
