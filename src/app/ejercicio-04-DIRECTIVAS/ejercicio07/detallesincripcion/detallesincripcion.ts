import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-detallesincripcion',
  imports: [RouterModule],
  templateUrl: './detallesincripcion.html',
  styleUrl: './detallesincripcion.css',
})
export class Detallesincripcion {
datos: any;


constructor(private route: ActivatedRoute, private router: Router) {
this.route.params.subscribe(params => {
this.datos = params;
});
}

volver() {
    this.router.navigate(['/directivas-menu/formularioincripcioncurso']);
}
}