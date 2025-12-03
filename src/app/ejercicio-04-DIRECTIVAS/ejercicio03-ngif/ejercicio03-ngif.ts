import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-ejercicio03-ngif',
  imports: [RouterModule],
  templateUrl: './ejercicio03-ngif.html',
  styleUrl: './ejercicio03-ngif.css',
})
export class Ejercicio03NGIF {
  estaAutenticado: boolean = false;

  toggleAuth() {
    this.estaAutenticado = !this.estaAutenticado;
  }
}