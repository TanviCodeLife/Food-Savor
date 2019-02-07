import { Component, OnInit, Input } from '@angular/core';
import { RecipeApiService } from '../recipe-api.service';
import { AuthService } from '../auth.service';
import { Recipe } from '../recipe.model';
import * as firebase from "firebase";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [ RecipeApiService, AuthService ]
})

export class RecipeListComponent implements OnInit {
  @Input() recipes: any[];
  private responseApi: Object;

  private user;

  favoriteDuplicateError: boolean = false;


  constructor(private recipeApiService: RecipeApiService, private authService: AuthService) { }

  ngOnInit() {

  }


  ngDoCheck() {
    this.user = firebase.auth().currentUser;

  }

//   favorite(favoriteName: string, favoriteUrl: string, favoriteCal){
//     let favoriteRecipe: Recipe = new Recipe(favoriteName, favoriteUrl)
//     this.favoriteDuplicateError = false;
//     // this.authService.addFavorite(favoriteRecipe);
//
//     if (this.authService.addFavorite(favoriteRecipe) === "duplicate"){
//       this.favoriteDuplicateError = true;
//     }
// }

  favorite(favoriteName: string, favoriteUrl: string, favoriteCal) {
    if(this.user === null){
      this.authService.login();
      console.log(this.user);
    } else{
      let currentUserId = this.user.uid
      let favoriteRecipe: Recipe = new Recipe(favoriteName, favoriteUrl)
      if(this.authService.pushFavorite(favoriteRecipe, currentUserId) === "duplicate") {
        this.favoriteDuplicateError = true;
      }
      const heart:any = document.getElementById(favoriteCal);
      heart.style.fill = 'red';

    }
  }

  closeError(){
    this.favoriteDuplicateError = false;
  }

}
