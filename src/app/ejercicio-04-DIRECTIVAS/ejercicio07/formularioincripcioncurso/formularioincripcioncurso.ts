import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-formularioincripcioncurso',
  imports: [FormsModule, RouterModule],
  templateUrl: './formularioincripcioncurso.html',
  styleUrl: './formularioincripcioncurso.css',
})
export class Formularioincripcioncurso {
generos: string[] = ['Hombre', 'Mujer', 'Otros'];
nacionalidades: string[] = ['Española', 'Peruana', 'Mexicana', 'Venezolana'];
lenguagesprogramacion: string[] = ['C++', 'C#', 'Java'];


seleccion = {
genero: this.generos[0],
nacionalidad: this.nacionalidades[0],
lenguageprogramacion: this.lenguagesprogramacion[0],
};


constructor(private router: Router) {}


verDetalle() {
this.router.navigate(['/detallesincripcion', this.seleccion]);
}
}