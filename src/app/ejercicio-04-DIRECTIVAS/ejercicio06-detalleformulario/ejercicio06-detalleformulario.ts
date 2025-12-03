import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ejercicio06-detalleformulario',
  imports: [],
  templateUrl: './ejercicio06-detalleformulario.html',
  styleUrl: './ejercicio06-detalleformulario.css',
})
export class Ejercicio06Detalleformulario implements OnInit {

  criterios: any = {};
  private router = inject(Router);
  ngOnInit() {
    // history.state siempre contiene los datos enviados por navigate()
    this.criterios = history.state.criterios;
  }
  volver() {
    this.router.navigate(['/ejercicio06-formulariodinamico']);
  }
}


