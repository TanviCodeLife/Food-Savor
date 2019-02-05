import { Component, OnInit } from '@angular/core';
import { RecipeApiService } from '../recipe-api.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [ RecipeApiService ]
})

export class RecipeListComponent implements OnInit {
  private recipes: object[];
  private responseApi: Object;
  favorites: string[] = [];

  constructor(private recipeApiService: RecipeApiService) { }

  ngOnInit() {
    this.recipeApiService.getByIngredients("tomato", "vegan", null).subscribe(response => {
      this.responseApi = response.json();
      this.recipes = this.responseApi.hits;
    });
  }

  favorite(name: string, url: string){
    this.favorites.push([name, url]);
    console.log(this.favorites)
  }

}
