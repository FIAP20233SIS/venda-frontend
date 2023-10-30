import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.scss']
})
export class ModalProductComponent {
  @Input() product: any;

  @Output() closeModalEmit = new EventEmitter();
  
  closeModal() {
    this.closeModalEmit.emit();
  }

  constructor() { }
}
