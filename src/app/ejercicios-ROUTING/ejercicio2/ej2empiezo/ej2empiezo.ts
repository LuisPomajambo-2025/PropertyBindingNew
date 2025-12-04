import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-ej2empiezo',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  templateUrl: './ej2empiezo.html',
  styleUrl: './ej2empiezo.css',
})
export class Ej2empiezo {
  ciudad: string = 'Madrid';
  nombre: string = 'Juan';
  constructor(private router: Router) {}
goToDetalle() {
      this.router.navigate(['/routing-menu/ejer2destino', this.nombre, this.ciudad]);
  }
}                           
