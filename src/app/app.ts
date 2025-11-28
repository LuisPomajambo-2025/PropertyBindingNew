import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EJERCICIO1 } from './ejercicio-03-BINDING/ejercicio-1/ejercicio-1';
import { EJERCICIO2 } from './ejercicio-03-BINDING/ejercicio-2/ejercicio-2';
import { EJERCICIO3 } from './ejercicio-03-BINDING/ejercicio-3/ejercicio-3';
import { EJERCICIO4 } from './ejercicio-03-BINDING/ejercicio-4/ejercicio-4';
import { EJERCICIO5 } from './ejercicio-03-BINDING/ejercicio-5/ejercicio-5';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EJERCICIO1, EJERCICIO2, EJERCICIO3, EJERCICIO4, EJERCICIO5],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('solucion-ejercicios');
}
