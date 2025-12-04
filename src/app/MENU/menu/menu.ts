import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-menu',
  imports: [RouterModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu{

  menuActual: 'routing' | 'directivas' | null = null;

  mostrarMenu(tipo: 'routing' | 'directivas') {
    this.menuActual = tipo;
  }
}