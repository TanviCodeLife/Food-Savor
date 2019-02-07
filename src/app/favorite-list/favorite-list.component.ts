import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';
// import * as firebase from "firebase";

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
  selectedFavorite = null;
  @Output() clickSender = new EventEmitter();

  constructor(private authService: AuthService) { }

  ngOnInit(){

  }

  openModal(favoriteToEdit){
    this.showModal = true;
    this.selectedFavorite = favoriteToEdit;
    console.log(this.selectedFavorite);
    this.clickSender.emit(favoriteToEdit)
  }

  deleteFavorite(favorite){
    this.authService.deleteFavorite(favorite);
  }

}
