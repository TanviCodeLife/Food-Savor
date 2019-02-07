import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css'],
  providers: [AuthService]
})
export class FavoriteListComponent {
  @Input() favList: FirebaseListObservable<any[]>;
  favoriteArray: any[];
  showModal: boolean = false;
  selectedFavorite = null;
  @Output() clickSender = new EventEmitter();
  private user;
  constructor(private authService: AuthService) { }

  openModal(favoriteToEdit){
    this.showModal = true;
    this.selectedFavorite = favoriteToEdit;
    this.clickSender.emit(favoriteToEdit)
  }

  deleteFavorite(favorite){
    this.authService.deleteFavorite(favorite);
  }

}
