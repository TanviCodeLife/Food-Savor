import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  constructor( private database: AngularFireDatabase, public afAuth: AngularFireAuth ) {
    this.user = afAuth.authState;
   }

  login() {
    let email: string = "hcb110@humboldt.edu";
    let password: string = "12345s";
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  updatePreferences(preferences){
    this.user.subscribe(user => {
      let userPreference = this.database.object(`preferences/${user.uid}`)
      userPreference.set(preferences);
      console.log(user.uid);
    })
  }


}
