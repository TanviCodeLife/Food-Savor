import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  constructor( public afAuth: AngularFireAuth ) {
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


}
