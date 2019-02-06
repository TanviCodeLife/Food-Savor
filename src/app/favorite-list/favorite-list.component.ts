import { Component, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css'],
})
export class FavoriteListComponent {
@Input() favList: FirebaseListObservable<any[]>;
favoriteArray: any[];

  constructor(private authService: AuthService) { }


  // favList?.subscribe(response => {
  //   this.favoriteArray = response;
  // });

}
