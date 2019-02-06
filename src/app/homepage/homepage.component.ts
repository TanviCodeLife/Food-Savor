import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [ AuthService ]
})
export class HomepageComponent implements OnInit {
  showFavs: boolean = true;
  favorites: FirebaseListObservable<any[]>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  getFavorites(){
    this.favorites = this.authService.getFavorites();
  }

}
