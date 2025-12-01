import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 👈 necesario para ngModel
@Component({
  selector: 'app-ejercicio-7',
  standalone: true, // 👈 obligatorio para standalone component
  imports: [FormsModule], // 👈 importa FormsModule aquí
  templateUrl: './ejercicio-7.html',
  styleUrl: './ejercicio-7.css',
})
export class EJERCICIO7 {
cantidad: number = 1;
  monedaOrigen: string = 'EUR';
  monedaDestino: string = 'USD';

  // Tasas muy básicas para principiantes
  tasas: any = {
    EUR: { USD: 1.10, GBP: 0.86, EUR: 1 },
    USD: { EUR: 0.91, GBP: 0.78, USD: 1 },
    GBP: { EUR: 1.16, USD: 1.28, GBP: 1 }
  };

  resultado: number = 0;

  convertir() {
    const tasa = this.tasas[this.monedaOrigen][this.monedaDestino];
    this.resultado = this.cantidad * tasa;
  }
}
