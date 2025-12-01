import { Routes } from '@angular/router';
//import { Hacia } from './ROUTING/hacia/hacia';
//import { Parametro } from './ROUTING/parametro/parametro';
import { ERRORNAVEGACION } from './ROUTING/errornavegacion/errornavegacion';
//import { App } from './app';
import { DondeEstamos } from './ejercicios-ROUTING/ejercicio0/donde-estamos/donde-estamos';
import { QuienesSomos } from './ejercicios-ROUTING/ejercicio0/quienes-somos/quienes-somos';
import { FormularioDeContacto } from './ejercicios-ROUTING/ejercicio0/formulario-de-contacto/formulario-de-contacto';
import { Finalizo } from './ejercicios-ROUTING/ejercicio1/finalizo/finalizo';

export const routes: Routes = [
/*{ path: 'hacia', component:Hacia},
{ path: 'parametro/:id', component:Parametro},*/
{ path: 'donde-estamos', component:DondeEstamos},
{ path: 'quienes-somos', component:QuienesSomos},
{ path: 'formulario-contacto', component:FormularioDeContacto},
{ path: 'finalizo/:id', component:Finalizo},
{ path: '**', component: ERRORNAVEGACION}
];
