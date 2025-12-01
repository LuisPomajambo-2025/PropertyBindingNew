import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 👈 necesario para ngModel

@Component({
  selector: 'app-ejercicio-6',
  standalone: true, // 👈 obligatorio para standalone component
  imports: [FormsModule], // 👈 importa FormsModule aquí
  templateUrl: './ejercicio-6.html',
  styleUrl: './ejercicio-6.css',
})
export class EJERCICIO6 {
  numero1: number = 0;
  numero2: number = 0;
  operacion: string = 'sumar';

  calcular(): number | string {
    switch (this.operacion) {
      case 'sumar': return this.numero1 + this.numero2;
      case 'restar': return this.numero1 - this.numero2;
      case 'multiplicar': return this.numero1 * this.numero2;
      case 'dividir': return this.numero2 !== 0 ? this.numero1 / this.numero2 : 'Error: división entre 0';
      default: return 0;
    }
  }
}
