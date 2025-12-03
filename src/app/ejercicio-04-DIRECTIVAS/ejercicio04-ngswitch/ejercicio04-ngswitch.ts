import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-ejercicio04-ngswitch',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './ejercicio04-ngswitch.html',
  styleUrl: './ejercicio04-ngswitch.css',
})
export class Ejercicio04NGSWITCH {
  rolUsuario: 'admin' | 'editor' | 'viewer' = 'viewer';

  cambiarRol() {
    switch (this.rolUsuario) {
      case 'viewer':
        this.rolUsuario = 'editor';
        break;
      case 'editor':
        this.rolUsuario = 'admin';
        break;
      case 'admin':
        this.rolUsuario = 'viewer';
        break;
      default:
        this.rolUsuario = 'viewer';
    }
  }
}
