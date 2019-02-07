import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [AuthService]

})
export class ModalComponent {
@Input() selectedFav;
@Output() clickedDone = new EventEmitter();

  constructor(private authService: AuthService) {}

  addNote(modalKey: string, notes: string){
    this.authService.editFavorite(modalKey, notes);
    this.clickedDone.emit();
  }

}
