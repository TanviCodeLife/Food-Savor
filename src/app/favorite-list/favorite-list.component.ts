import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css'],
  providers: [AuthService]
})
export class FavoriteListComponent implements OnInit {
  @Input() favList: FirebaseListObservable<any[]>;
  favoriteArray: any[];
  showModal: boolean = false;

  private bodyText: string;


  constructor(private authService: AuthService) { }

  ngOnInit(){
    this.bodyText = 'hi!';
  }

  openModal(){
    this.showModal = true;
  }

  deleteFavorite(favorite){
    this.authService.deleteFavorite(favorite);
  }

}
