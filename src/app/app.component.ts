import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from "./products/components/product.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Hola mundo Angular 19';
  enabled = false;
  courses = ['Angular', 'React', 'Vue', 'SpringBoot', 'Java', 'Python'];
  setEnabled() {
    this.enabled = this.enabled ? false : true;
  }
}
