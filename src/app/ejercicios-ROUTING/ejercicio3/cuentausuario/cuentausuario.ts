import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-cuentausuario',
  standalone: true,   
  imports: [FormsModule, RouterModule],
  templateUrl: './cuentausuario.html',
  styleUrl: './cuentausuario.css',
})
export class Cuentausuario {
  hoverPerfil = false;
  hoverConfig = false;
  hoverHistorial = false;
}
