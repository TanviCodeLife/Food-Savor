import { Component, OnInit, Input } from '@angular/core';
import { RecipeApiService } from '../recipe-api.service';
import { AuthService } from '../auth.service';
import { Recipe } from '../recipe.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [ RecipeApiService ]
})

export class RecipeListComponent implements OnInit {
  @Input() recipes: any[];
  private responseApi: Object;

  constructor(private recipeApiService: RecipeApiService, private authService: AuthService) { }

  ngOnInit() {

  }

  favorite(favoriteName: string, favoriteUrl: string, favoriteCal){
    let favoriteRecipe: Recipe = new Recipe(favoriteName, favoriteUrl)
    this.authService.addFavorite(favoriteRecipe);

    const heart:any = document.getElementById(favoriteCal);
    heart.style.fill = 'red';
    console.log(heart);


  }

}
