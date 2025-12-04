import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ejercicio06-detalleformulario',
  imports: [],
  templateUrl: './ejercicio06-detalleformulario.html',
  styleUrl: './ejercicio06-detalleformulario.css',
})
export class Ejercicio06Detalleformulario {
datos: any;


constructor(private route: ActivatedRoute, private router: Router) {
this.route.params.subscribe(params => {
this.datos = params;
});
}

volver() {
    this.router.navigate(['/ejercicio06-formulariodinamico']);
}
}


