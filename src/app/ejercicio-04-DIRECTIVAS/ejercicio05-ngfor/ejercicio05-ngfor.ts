import { Component } from '@angular/core';
import { Tarea } from './tarea.interface';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-ejercicio05-ngfor',
  imports: [RouterModule],
  templateUrl: './ejercicio05-ngfor.html',
  styleUrl: './ejercicio05-ngfor.css',
})
export class Ejercicio05NGFOR {  

  tareas: Tarea[] = [
    { id: 1, titulo: 'Comprar comida', completada: false },
    { id: 2, titulo: 'Lavar el auto', completada: true },
    { id: 3, titulo: 'Estudiar Angular', completada: false }
  ];

}
