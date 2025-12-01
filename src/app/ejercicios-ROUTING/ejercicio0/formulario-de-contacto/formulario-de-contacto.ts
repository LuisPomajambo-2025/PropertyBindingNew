import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 👈 necesario para ngModel

@Component({
  selector: 'app-formulario-de-contacto',
  standalone: true, // 👈 obligatorio para standalone component
  imports: [FormsModule], // 👈 importa FormsModule aquí
  templateUrl: './formulario-de-contacto.html',
  styleUrl: './formulario-de-contacto.css',
})
export class FormularioDeContacto {
  // Modelo del formulario
  contacto = {
    nombre: '',
    apellidos: '',
    email: '',
    telefono: ''
  };

  enviar() {
    console.log('Formulario enviado:',this.contacto);
    alert('Formulario enviado correctamente: '+ this.contacto.nombre +"/"+this.contacto.apellidos+"/"+this.contacto.email+"/"+this.contacto.telefono);
  }

}
