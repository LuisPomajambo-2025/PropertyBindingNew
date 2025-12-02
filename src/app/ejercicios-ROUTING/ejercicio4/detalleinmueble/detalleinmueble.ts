import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalleinmueble',
  imports: [CurrencyPipe],
  standalone: true,
  templateUrl: './detalleinmueble.html',
  styleUrl: './detalleinmueble.css',
})
export class Detalleinmueble {
hover = false;
inmuebleId!: number;
titulo!: string;
precio!: number;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // Captura parámetros de la ruta
    this.route.params.subscribe(params => {
      this.inmuebleId = +params['id'];
      this.titulo = params['titulo'];
      this.precio = +params['precio'];
    });
  }
  

  volver() {
    this.router.navigate(['/inicioinmueble']);
  }
  
}
