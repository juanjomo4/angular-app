import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../models/Product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'product-app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  product: Product = new Product();

  // Se usa OutPut() para emitir el event al component padre
  @Output() newproductEvent = new EventEmitter();

  onSubmit() {
    this.newproductEvent.emit(this.product);
    console.log('Form submitted:', this.product);
  }
}
