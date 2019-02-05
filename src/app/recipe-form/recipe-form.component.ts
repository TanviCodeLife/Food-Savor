import { Component, OnInit } from '@angular/core';
import { RecipeApiService } from '../recipe-api.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
  providers: [RecipeApiService]
})
export class RecipeFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
