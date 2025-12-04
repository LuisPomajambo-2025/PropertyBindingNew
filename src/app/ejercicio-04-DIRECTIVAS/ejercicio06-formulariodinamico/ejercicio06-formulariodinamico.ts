
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-ejercicio06-formulariodinamico',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './ejercicio06-formulariodinamico.html',
  styleUrl: './ejercicio06-formulariodinamico.css',
})
export class Ejercicio06FORMULARIODINAMICO  {
tamanosRam: string[] = ['8 GB', '16 GB', '32 GB', '64 GB'];
tiposProcesador: string[] = ['Intel i5', 'Intel i7', 'AMD Ryzen 5', 'AMD Ryzen 7'];
tarjetasGraficas: string[] = ['NVIDIA GTX 1660', 'NVIDIA RTX 3060', 'AMD RX 6600'];
discosDuros: string[] = ['HDD 1TB', 'SSD 500GB', 'NVMe 1TB'];
fuentesAlimentacion: string[] = ['500W', '650W', '750W'];


seleccion = {
ram: this.tamanosRam[0],
procesador: this.tiposProcesador[0],
grafica: this.tarjetasGraficas[0],
disco: this.discosDuros[0],
fuente: this.fuentesAlimentacion[0]
};


constructor(private router: Router) {}


verDetalle() {
this.router.navigate(['/directivas-menu/ejercicio06-detalleformulario', this.seleccion]);
}
}