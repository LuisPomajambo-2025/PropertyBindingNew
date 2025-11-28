import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-1',
  imports: [],
  templateUrl: './ejercicio-1.html',
  styleUrl: './ejercicio-1.css',
})
export class EJERCICIO1 {
  num1: number = 20;
  num2: number = 25;
  suma: number = this.num1 + this.num2;


}
