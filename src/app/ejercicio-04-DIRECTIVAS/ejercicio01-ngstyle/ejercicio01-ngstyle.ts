import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-ejercicio01-ngstyle',
  imports: [RouterModule],
  templateUrl: './ejercicio01-ngstyle.html',
  styleUrl: './ejercicio01-ngstyle.css',
})
export class Ejercicio01NGSTYLE {
  esActivo: boolean = false;

  toggleActivo() {
    this.esActivo = !this.esActivo;
  }
}
