import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ModalService } from '../modal.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css'],
  providers: [AuthService, ModalService]
})
export class FavoriteListComponent implements OnInit {
  @Input() favList: FirebaseListObservable<any[]>;
  favoriteArray: any[];

  private bodyText: string;


  constructor(private authService: AuthService, private modalService: ModalService) { }

  ngOnInit(){
    this.bodyText = 'hi!'
  }

  openModal(id: string){
    this.modalService.open(id);
  }

  closeModal(id: string){
    this.modalService.close(id);
  }

  addNote(recipeKey: string, notes: string){
    this.authService.editFavorite(recipeKey, notes);
  }

}
