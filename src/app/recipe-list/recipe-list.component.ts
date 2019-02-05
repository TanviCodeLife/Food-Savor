import { Component, OnInit, Input } from '@angular/core';
import { RecipeApiService } from '../recipe-api.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [ RecipeApiService ]
})

export class RecipeListComponent implements OnInit {
  @Input() recipes: any[];
  private responseApi: Object;
  favorites: Favorite = [];

  constructor(private recipeApiService: RecipeApiService) { }

  ngOnInit() {
    // this.recipeApiService.getByIngredients("tomato", "vegan", null).subscribe(response => {
    //   this.responseApi = response.json();
    //   this.recipes = this.responseApi.hits;
    // });
  }

  favorite(favoriteName: string, favoriteUrl: string){
    this.favorites.push({name: favoriteName, url: favoriteUrl});
    console.log(this.favorites);
  }

}

type Favorite = Array<{name: string, url: string}>;
