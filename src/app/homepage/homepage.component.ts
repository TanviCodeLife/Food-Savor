import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { RecipeApiService } from '../recipe-api.service';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [ AuthService, RecipeApiService]
})
export class HomepageComponent implements OnInit {
  showFavs: boolean = true;
  favorites: FirebaseListObservable<any[]>;
  recipeListShowing: boolean = false;
  user;
  private isLoggedIn: Boolean;
  private userName: String;
  constructor(private authService: AuthService, private recipeApiService: RecipeApiService) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
    });
  }

  setParentClass() {
    if (!this.recipeListShowing) {
      return "parent-search-no-recipes";
    } else {
      return "parent-search-showing-recipes";
    }
  }

  setChildClass() {
    if (!this.recipeListShowing) {
      return "home-search-no-recipes";
    } else {
      return "home-search-showing-recipes";
    }
  }

  showRecipes(){
    this.recipeListShowing = true;
  }

  ngOnInit() {
  }

  getFavorites(){
    this.favorites = this.authService.getFavorites();
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
