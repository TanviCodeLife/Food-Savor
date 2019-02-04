import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css'],
  providers: [ AuthService ]
})
export class PreferencesComponent implements OnInit {
  preferences: object[] = [
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

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  updatePreference(value){
    for (let i = 0; i < this.preferences.length; i++) {
      if (this.preferences[i].code === value) {
        this.preferences[i].checked = !this.preferences[i].checked;
      }
    }
    console.log(this.preferences);
    this.authService.updatePreferences(this.preferences);
  }

}
