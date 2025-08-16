import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
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
