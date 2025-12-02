import { Component } from '@angular/core';
import { Router, RouterModule } from "@angular/router";
import { CurrencyPipe } from '@angular/common';   // 👈 IMPORTAR PIPE

@Component({
  selector: 'app-inicioinmobiliaria',
  imports: [RouterModule,CurrencyPipe ],
  standalone: true,
  templateUrl: './inicioinmobiliaria.html',
  styleUrl: './inicioinmobiliaria.css',
})
export class Inicioinmobiliaria {
  inmuebles = [
    { id: 1, titulo: 'Piso céntrico', precio: 120000 },
    { id: 2, titulo: 'Chalet con piscina', precio: 350000 },
    { id: 3, titulo: 'Apartamento en la playa', precio: 180000 }
  ];
  constructor(private router: Router) {}

  verDetalle(id: number, titulo:string, precio:number) {
    this.router.navigate(['/detalleinmueble', id, titulo, precio]);
  }

}
