import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";


@Component({
  selector: 'app-ejercicio02-ngclass',
  imports: [TitleCasePipe, RouterModule],
  templateUrl: './ejercicio02-ngclass.html',
  styleUrl: './ejercicio02-ngclass.css',
})
export class Ejercicio02NGCLASS {
  status: 'activo' | 'inactivo' = 'inactivo';

  toggleStatus() {
    this.status = this.status === 'activo' ? 'inactivo' : 'activo';
  }
}
