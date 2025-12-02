import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ejer2destino',
  imports: [],
  templateUrl: './ejer2destino.html',
  styleUrl: './ejer2destino.css',
})
export class Ejer2destino implements OnInit {

  nombre!: string | null;
  ciudad!: string | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
this.route.paramMap.subscribe(params => {
      this.nombre = params.get('nombre');
      this.ciudad = params.get('ciudad');
      console.log('Parámetros actualizados:', this.nombre, this.ciudad);
    });
  }



}