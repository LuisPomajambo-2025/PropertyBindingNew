import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-5',
  imports: [],
  templateUrl: './ejercicio-5.html',
  styleUrl: './ejercicio-5.css',
})
export class EJERCICIO5 {
  valor: number = 10;
  isDisabled: boolean = false;
  incrementar(){
    this.valor++;
    this.verificarValor();
  }
  decrementar(){
    this.valor--;
    this.verificarValor();

  }

  actualizar(){
    this.valor = 0;
  }
  verificarValor() {
    if (this.valor === 0){
      this.isDisabled = true;
    }else{
      this.isDisabled = false;
    }
  }
}
