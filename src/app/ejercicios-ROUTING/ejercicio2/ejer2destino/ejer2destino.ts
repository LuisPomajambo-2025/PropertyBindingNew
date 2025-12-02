import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ejer2destino',
  standalone: true,
  imports: [],
  templateUrl: './ejer2destino.html',
  styleUrl: './ejer2destino.css',
})
export class Ejer2destino implements OnInit {

  nombre!: string | null;
  ciudad!: string | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const paramnombre = this.route.snapshot.paramMap.get('nombre');
    const paramciudad = this.route.snapshot.paramMap.get('ciudad');
    if(paramnombre){
      this.nombre = paramnombre;
    }
    if(paramciudad){
      this.ciudad = paramciudad;
    }
    console.log('Parametro componente inicializado con:', this.nombre + " - "+this.ciudad);
  }



}