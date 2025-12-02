import { Routes } from '@angular/router';
//import { Hacia } from './ROUTING/hacia/hacia';
//import { Parametro } from './ROUTING/parametro/parametro';
import { ERRORNAVEGACION } from './ROUTING/errornavegacion/errornavegacion';
//import { App } from './app';
import { DondeEstamos } from './ejercicios-ROUTING/ejercicio0/donde-estamos/donde-estamos';
import { QuienesSomos } from './ejercicios-ROUTING/ejercicio0/quienes-somos/quienes-somos';
import { FormularioDeContacto } from './ejercicios-ROUTING/ejercicio0/formulario-de-contacto/formulario-de-contacto';
import { Finalizo } from './ejercicios-ROUTING/ejercicio1/finalizo/finalizo';
import { Ejer2destino } from './ejercicios-ROUTING/ejercicio2/ejer2destino/ejer2destino';
import { Cuentausuario } from './ejercicios-ROUTING/ejercicio3/cuentausuario/cuentausuario';
import { Perfil } from './ejercicios-ROUTING/ejercicio3/perfil/perfil';
import { Configuracion } from './ejercicios-ROUTING/ejercicio3/configuracion/configuracion';
import { Historial } from './ejercicios-ROUTING/ejercicio3/historial/historial';
import { Inicio } from './ejercicios-ROUTING/ejercicio0/inicio/inicio';
import { Empiezo } from './ejercicios-ROUTING/ejercicio1/empiezo/empiezo';
import { Ej2empiezo } from './ejercicios-ROUTING/ejercicio2/ej2empiezo/ej2empiezo';
export const routes: Routes = [
/*{ path: 'hacia', component:Hacia},
{ path: 'parametro/:id', component:Parametro},*/
{ path: 'cuenta', component: Cuentausuario,
    children: [
      { path: '', redirectTo: 'perfil', pathMatch: 'full' },
      { path: 'perfil', component: Perfil},
      { path: 'configuracion', component: Configuracion},
      { path: 'historial', component: Historial },
    ]
},
{ path: 'inicio', component:Inicio,
    children: [
        { path: 'donde-estamos', component:DondeEstamos},
        { path: 'quienes-somos', component:QuienesSomos},
        { path: 'formulario-contacto', component:FormularioDeContacto},
    ]
},
{path: 'empiezo', component:Empiezo,
    children: [
        { path: 'finalizo/:id', component:Finalizo},
    ]
},
{ path: 'ej2empiezo', component: Ej2empiezo },
{ path: 'ejer2destino/:nombre/:ciudad', component: Ejer2destino },
{ path: '**', component: ERRORNAVEGACION}
];
