
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ejercicio06-formulariodinamico',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio06-formulariodinamico.html',
  styleUrl: './ejercicio06-formulariodinamico.css',
})
export class Ejercicio06FORMULARIODINAMICO  {

  private fb = inject(FormBuilder);
  private router = inject(Router);

  // Arrays de selección
  tamanosRAM = ['8GB', '16GB', '32GB', '64GB'];
  tiposProcesador = ['Intel i5', 'Intel i7', 'Ryzen 5', 'Ryzen 7'];
  tarjetasGraficas = ['RTX 3060', 'RTX 3070', 'RX 6800'];
  discosDuros = ['SSD 512GB', 'SSD 1TB', 'HDD 2TB'];
  fuentesAlimentacion = ['500W', '650W', '750W'];

  // Formulario reactivo
  form: FormGroup = this.fb.group({
    tamanoRam: [[this.tamanosRAM[0]]],
    tipoProcesador: [this.tiposProcesador[0]],
    tarjetaGrafica: [[this.tarjetasGraficas[0]]],
    discoDuro: [[this.discosDuros[0]]],
    fuenteAlimentacion: [this.fuentesAlimentacion[0]]
  });

  // Alterna elementos en los combos check
  toggleSelection(campo: string, valor: string) {
    const arr: string[] = this.form.value[campo];

    if (arr.includes(valor)) {
      const actualizado = arr.filter(v => v !== valor);
      this.form.patchValue({ [campo]: actualizado });
    } else {
      this.form.patchValue({ [campo]: [...arr, valor] });
    }
  }

  // Enviar TODO al componente detalle
  goToDetalle() {
    this.router.navigate(['/ejercicio06-detalleformulario'], {
      state: { criterios: this.form.value }
    });
  }

}