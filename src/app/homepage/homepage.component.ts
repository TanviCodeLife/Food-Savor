import { Component, OnInit, HostBinding } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgModule } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { RecipeApiService } from '../recipe-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as firebase from "firebase";

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [ ],
  bootstrap: [ ]
})

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  animations: [
    trigger('showFavorites', [
      state('hide', style({

      })),
      state('show', style({
        top: 0,
        height: '100%',
        width: '400px',
        backgroundColor: '#6aa84fff',
        borderRadius: '0px',
        zIndex: '99999'
      })),
      transition('hide => show', [
        animate('.5s')
      ]),
      transition('show => hide', [
        animate('.5s')
      ]),
    ]),

    trigger('showRecipes', [
      state('notShowing', style({

      })),
      state('showing', style({
        marginTop: '60px',
      })),
      transition('notShowing => showing', [
        animate('1s')
      ]),
      transition('showing => notShowing', [
        animate('1s')
      ]),
    ]),
  ],
  providers: [ AuthService, RecipeApiService]
})

export class HomepageComponent implements OnInit {
  showFavorites: boolean = false;
  showFavs: boolean = true;
  favorites: FirebaseListObservable<any[]>;
  recipeListShowing: boolean = false;
  private user;
  private isLoggedIn: Boolean;
  private userName: String;
  selectedFavorite = null;

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

  ngOnInit() {

  }

  ngDoCheck(){
    this.user = firebase.auth().currentUser;
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

  getFavorites(){
    this.showFavorites = !this.showFavorites;
    this.favorites = this.authService.getFavorites(this.user.uid);
  }

  closeFavorites(){
    this.showFavorites = !this.showFavorites;
  }

  editFavorite(clickedFavorite) {
    this.selectedFavorite = clickedFavorite;
  }

  finishedEditing(){
    this.selectedFavorite = null;
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
