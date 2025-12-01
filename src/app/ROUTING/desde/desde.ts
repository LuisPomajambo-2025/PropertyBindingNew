import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-desde',
  imports: [RouterModule],
  templateUrl: './desde.html',
  styleUrl: './desde.css',
})
export class Desde {
  constructor(private rutas: Router){}
  navegar(){
    this.rutas.navigate(['/hacia']);
  }
  navegarInexistente(){
    this.rutas.navigate(['/rutasinexistente']);
  }  
  navegarParametro(){
    this.rutas.navigate(['parametro', 42]);
  }
}
