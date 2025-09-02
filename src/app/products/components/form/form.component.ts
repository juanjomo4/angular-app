import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/Product';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-app-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  // Se usa Input() para recibir el product desde el component padre
  // Se inicializa con un nuevo objeto Product para evitar errores al cargar el componente
  @Input() product: Product = new Product();

  // Se usa OutPut() para emitir el event al component padre
  @Output() newproductEvent = new EventEmitter();

  onSubmit(productForm: NgForm) {
    // Verifica si el formulario es válido
    if (productForm.valid) {
      this.newproductEvent.emit(this.product);
      console.log('Form submitted:', this.product);
    }
    // Resetea el formulario una vez enviado
    productForm.reset();
    productForm.resetForm();
  }
  clean(productForm: NgForm) {
    this.product = new Product();
    // Resetea el formulario una vez enviado
    productForm.reset();
    productForm.resetForm();
  }
}
