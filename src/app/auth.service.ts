import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Recipe } from './recipe.model';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  favorites: FirebaseListObservable<any[]>;

  constructor( private database: AngularFireDatabase, public afAuth: AngularFireAuth ) {
    this.user = afAuth.authState;
    this.user.subscribe(response => {
      this.favorites = database.list(`favorites/${response.uid}`)
    })
   }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  updatePreferences(preferences){
    this.user.subscribe(user => {
      let userPreference = this.database.object(`preferences/${user.uid}`)
      userPreference.set(preferences);
    })
  }

  addFavorite(favoriteRecipe: Recipe){
    this.favorites.push(favoriteRecipe);
  }

  getFavorites(){
    this.favorites.subscribe(response => {
      console.log(response)
    })
    // console.log(this.favorites);
    return this.favorites;
  }

  getUser(){
    return this.user
  }


}
