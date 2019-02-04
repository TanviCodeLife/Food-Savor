import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {
  allergies: object[] = [{"apiCode": "peanut-free", "name": "Peanuts"},
    {"code": "peanut-free", "name": "Peanuts"},
    {"code": "tree-nut-free", "name": "Tree Nuts"},
    {"code": "soy-free", "name": "Soy"},
    {"code": "fish-free", "name": "Fish"},
    {"code": "shellfish-free", "name": "Shelfish"},
    {"code": "dairy-free", "name": "Dairy"},
    {"code": "egg-free", "name": "Eggs"},
    {"code": "gluten-free", "name": "Gluten"},
    {"code": "wheat-free", "name": "Wheat"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
