import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css'],
})

export class PreferencesComponent implements OnInit {

  preferences: Preference = [
    {"code": "high-protein", "name": "High protein", "checked": false},
    {"code": "low-fat", "name": "Low fat", "checked": false},
    {"code": "low-carb", "name": "Low carb", "checked": false},
    {"code": "vegan", "name": "Vegan", "checked": false},
    {"code": "vegetarian", "name": "Vegetarian", "checked": false},
    {"code": "peanut-free", "name": "Peanut free", "checked": false},
    {"code": "tree-nut-free", "name": "Tree nut free", "checked": false},
    {"code": "sugar-conscious", "name": "Sugar conscious", "checked": false},
    {"code": "alcohol-free", "name": "Alcohol free", "checked": false}
  ];
  apiCodes: string[] = [];

  constructor() {

  }

  ngOnInit() { }

  updatePreference(value){
    for (let i = 0; i < this.preferences.length; i++) {
      if (this.preferences[i].code === value) {
        this.preferences[i].checked = !this.preferences[i].checked;
      }
    }
    console.log(this.preferences);
  }

  createApiCode() {
    this.apiCodes = [];
    for (let i = 0; i < this.preferences.length; i++) {
      if (this.preferences[i].checked === true) {
        this.apiCodes.push(this.preferences[i].code)
      }
    }
    console.log(this.apiCodes);
  }

}

type Preference = Array<{code: string, name: string, checked: boolean}>;
