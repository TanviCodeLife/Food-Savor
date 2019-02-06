import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'modal',
  template: '<ng-content></ng-content>',
  // templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [ModalService]
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    let modal = this;
    if(!this.id){
      console.error('modal needs id');
      return;
    }

    document.body.appendChild(this.element);

    this.element.addEventListener('click', function (e: any){
      if(e.target.className === 'modal'){
        modal.close();
      }
    });

    this.modalService.add(this);
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();

  }

  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('modal-open');
  }

  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('modal-open');
  }

}
