import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Recipe } from './recipe.model';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  userId: string = null;
  favorites: FirebaseListObservable<any[]>;
  result: any[] = [];
  loginCheck: boolean = false;

  constructor( private database: AngularFireDatabase, public afAuth: AngularFireAuth ) {
    this.user = afAuth.authState;
    this.user.subscribe(user => {
      this.favorites = database.list(`favorites/${user.uid}`);
      this.userId = user.uid;
      console.log(this.userId)
    })

   }

   setFavorites(currentUserId: string){
     return this.favorites = this.database.list(`favorites/${currentUserId}`)
   }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  addFavorite(){
    this.user.subscribe(user => {
      if(user === null){
        this.login();
        this.loginCheck = true;
        let currentUserId = user.uid;
        this.setFavorites(currentUserId);
      }
    });
  }

  checkLoginStatus(){
    return this.loginCheck;
  }

  pushFavorite(favoriteRecipe, uid){
    this.setFavorites(uid)
    this.favorites.subscribe(favorites => {
      this.result = favorites.filter(favorite => favorite.url === favoriteRecipe.url);
    });
    if(this.result.length === 0){
      this.favorites.push(favoriteRecipe);
    } else {
      alert("This recipe is already in your favorites!!")
    }
  }

  getFavorites(){
    return this.favorites;
  }

  findFavorite($key: string){
    return this.database.object(`favorites/${this.userId}/` + $key)

  }

  editFavorite(key: string, notes: string){
    const currentFavorite: any = this.findFavorite(key);
    currentFavorite.update({notes: notes});
  }

  deleteFavorite(favoriteToDelete) {
    const favoriteEntry = this.findFavorite(favoriteToDelete.$key);
    favoriteEntry.remove();
  }

  getUser(){
    return this.user
  }


}
