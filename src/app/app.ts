import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
//import { EJERCICIO1 } from './ejercicio-03-BINDING/ejercicio-1/ejercicio-1';
//import { EJERCICIO2 } from './ejercicio-03-BINDING/ejercicio-2/ejercicio-2';
//import { EJERCICIO3 } from './ejercicio-03-BINDING/ejercicio-3/ejercicio-3';
//import { EJERCICIO4 } from './ejercicio-03-BINDING/ejercicio-4/ejercicio-4';
//import { EJERCICIO5 } from './ejercicio-03-BINDING/ejercicio-5/ejercicio-5';
//import { Desde } from './ROUTING/desde/desde';
import { Inicio } from './ejercicios-ROUTING/ejercicio0/inicio/inicio';
import { Empiezo } from "./ejercicios-ROUTING/ejercicio1/empiezo/empiezo";
import { Desde } from './ROUTING/desde/desde';
import { Ej2empiezo } from './ejercicios-ROUTING/ejercicio2/ej2empiezo/ej2empiezo';
import { Cuentausuario } from "./ejercicios-ROUTING/ejercicio3/cuentausuario/cuentausuario";
import { Ejercicio01NGSTYLE } from './ejercicio-04-DIRECTIVAS/ejercicio01-ngstyle/ejercicio01-ngstyle';
import { Ejercicio02NGCLASS } from './ejercicio-04-DIRECTIVAS/ejercicio02-ngclass/ejercicio02-ngclass';
import { Ejercicio03NGIF } from './ejercicio-04-DIRECTIVAS/ejercicio03-ngif/ejercicio03-ngif';
import { Ejercicio04NGSWITCH } from './ejercicio-04-DIRECTIVAS/ejercicio04-ngswitch/ejercicio04-ngswitch';
import { Ejercicio05NGFOR } from './ejercicio-04-DIRECTIVAS/ejercicio05-ngfor/ejercicio05-ngfor';
import { Ejercicio06FORMULARIODINAMICO } from './ejercicio-04-DIRECTIVAS/ejercicio06-formulariodinamico/ejercicio06-formulariodinamico';
import { Ejercicio06Detalleformulario } from './ejercicio-04-DIRECTIVAS/ejercicio06-detalleformulario/ejercicio06-detalleformulario';

@Component({
  selector: 'app-root',
 // imports: [Inicio, Desde, RouterOutlet, EJERCICIO1, EJERCICIO2, EJERCICIO3, EJERCICIO4, EJERCICIO5],
  imports: [RouterOutlet, Inicio, Desde, Empiezo, Ej2empiezo, Cuentausuario, RouterLink, Ejercicio01NGSTYLE, Ejercicio02NGCLASS, Ejercicio03NGIF, Ejercicio04NGSWITCH, Ejercicio05NGFOR, Ejercicio06FORMULARIODINAMICO, Ejercicio06Detalleformulario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('solucion-ejercicios');
  
}
