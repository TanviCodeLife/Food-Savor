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
    this.user.subscribe(user => {
      this.favorites = database.list(`favorites/${user.uid}`);

    })
   }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  addFavorite(favoriteRecipe: Recipe){
    this.favorites.push(favoriteRecipe);
  }

  getFavorites(){
    this.favorites.subscribe(response => {
    })

    return this.favorites;
  }

  findFavorite($key: string){
    this.favorites.subscribe(response => {
      for(let i = 0; i < response.length; i++){
        if(response[i].$key === $key){
          console.log(response[i]);
          return response[i]
        }
      }
    });
  }

  editFavorite(key: string, notes: string){
    const currentFavorite: any = this.findFavorite(key);
    currentFavorite.update({notes: notes})
  }

  // getUser(){
  //   return this.user
  // }


}
