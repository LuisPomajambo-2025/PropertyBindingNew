import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalleinmueble',
  imports: [],
  standalone: true,
  templateUrl: './detalleinmueble.html',
  styleUrl: './detalleinmueble.css',
})
export class Detalleinmueble {
inmuebleId!: number;
titulo!: string;
precio!: number;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.inmuebleId = Number(this.route.snapshot.paramMap.get('id'));
    this.titulo = String(this.route.snapshot.paramMap.get('titulo'));
    this.precio = Number(this.route.snapshot.paramMap.get('precio'));
  }
  

  volver() {
    this.router.navigate(['/inicioinmueble']);
  }
  
}
