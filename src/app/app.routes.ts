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
import { Detalleinmueble } from './ejercicios-ROUTING/ejercicio4/detalleinmueble/detalleinmueble';
import { Inicioinmobiliaria } from './ejercicios-ROUTING/ejercicio4/inicioinmobiliaria/inicioinmobiliaria';
import { Ejercicio01NGSTYLE } from './ejercicio-04-DIRECTIVAS/ejercicio01-ngstyle/ejercicio01-ngstyle';
import { Ejercicio02NGCLASS } from './ejercicio-04-DIRECTIVAS/ejercicio02-ngclass/ejercicio02-ngclass';
import { Ejercicio03NGIF } from './ejercicio-04-DIRECTIVAS/ejercicio03-ngif/ejercicio03-ngif';
import { Ejercicio04NGSWITCH } from './ejercicio-04-DIRECTIVAS/ejercicio04-ngswitch/ejercicio04-ngswitch';
import { Ejercicio05NGFOR } from './ejercicio-04-DIRECTIVAS/ejercicio05-ngfor/ejercicio05-ngfor';
import { Ejercicio06FORMULARIODINAMICO } from './ejercicio-04-DIRECTIVAS/ejercicio06-formulariodinamico/ejercicio06-formulariodinamico';
import { Ejercicio06Detalleformulario } from './ejercicio-04-DIRECTIVAS/ejercicio06-detalleformulario/ejercicio06-detalleformulario';
import { Formularioincripcioncurso } from './ejercicio-04-DIRECTIVAS/ejercicio07/formularioincripcioncurso/formularioincripcioncurso';
import { Detallesincripcion } from './ejercicio-04-DIRECTIVAS/ejercicio07/detallesincripcion/detallesincripcion';
import { Menu } from './MENU/menu/menu';
import { RoutingMenu } from './MENU/routing-menu/routing-menu';
import { DirectivasMenu } from './MENU/directivas-menu/directivas-menu';
export const routes: Routes = [
/*{ path: 'hacia', component:Hacia},
{ path: 'parametro/:id', component:Parametro},*/
//{ path: '', redirectTo: 'inicio', pathMatch: 'full' },



  { path: '', component: Menu },

/*  { path: 'cuenta', component: Cuentausuario,
    children: [
      { path: '', redirectTo: 'perfil', pathMatch: 'full' },
      { path: 'perfil', component: Perfil},
      { path: 'configuracion', component: Configuracion},
      { path: 'historial', component: Historial },
    ]
},
{ path: 'inicio', component:Inicio,
    children: [
        { path: '', redirectTo: 'quienes-somos', pathMatch: 'full' },
        { path: 'donde-estamos', component:DondeEstamos},
        { path: 'quienes-somos', component:QuienesSomos},
        { path: 'formulario-contacto', component:FormularioDeContacto},
    ]
},
{path: 'empiezo', component:Empiezo,
    children: [
        { path: 'finalizo/:id', component:Finalizo},
    ]
}
{ path: 'ej2empiezo', component: Ej2empiezo },
{ path: 'ejer2destino/:nombre/:ciudad', component: Ejer2destino },
{ path: 'inicioinmueble', component: Inicioinmobiliaria },
{ path: 'detalleinmueble/:id/:titulo/:precio', component: Detalleinmueble },
{ path: 'ejercicio01-ngstyle', component: Ejercicio01NGSTYLE}, 
{ path: 'ejercicio02-ngclass', component: Ejercicio02NGCLASS}, 
{ path: 'ejercicio03-ngif', component: Ejercicio03NGIF},
{ path: 'ejercicio04-ngswitch', component: Ejercicio04NGSWITCH},
{ path: 'ejercicio05-ngfor', component: Ejercicio05NGFOR},
{ path: 'ejercicio06-formulariodinamico', component: Ejercicio06FORMULARIODINAMICO},
{ path: 'ejercicio06-detalleformulario', component: Ejercicio06Detalleformulario},
{ path: 'formularioincripcioncurso', component: Formularioincripcioncurso},
{ path: 'detallesincripcion', component: Detallesincripcion},**/

{ path: '', component: Menu }, // menú inicial

  // Routing con ejercicios como hijos
  {
    path: 'routing-menu',
    component: RoutingMenu,
    children: [
      { path: 'inicio', component: Inicio },
      { path: 'empiezo', component: Empiezo,
         children: [
          { path: 'finalizo/:id', component:Finalizo},
        ]
       },
      { path: 'ej2empiezo', component: Ej2empiezo },
      { path: 'ejer2destino/:nombre/:ciudad', component: Ejer2destino },
      { path: 'cuenta', component: Cuentausuario, children: [
          { path: '', redirectTo: 'perfil', pathMatch: 'full' },
          { path: 'perfil', component: Perfil },
          { path: 'configuracion', component: Configuracion },
          { path: 'historial', component: Historial },
        ] 
      },
      
      { path: 'inicioinmueble', component: Inicioinmobiliaria },     
      { path: 'inicio', component:Inicio,
        children: [
          { path: '', redirectTo: 'quienes-somos', pathMatch: 'full' },
          { path: 'donde-estamos', component:DondeEstamos},
          { path: 'quienes-somos', component:QuienesSomos},
          { path: 'formulario-contacto', component:FormularioDeContacto},
    ]
}
    ]
  },

  // Directivas con ejercicios como hijos
  {
    path: 'directivas-menu',
    component: DirectivasMenu,
    children: [
      { path: 'ejercicio01-ngstyle', component: Ejercicio01NGSTYLE },
      { path: 'ejercicio02-ngclass', component: Ejercicio02NGCLASS },
      { path: 'ejercicio03-ngif', component: Ejercicio03NGIF },
      { path: 'ejercicio04-ngswitch', component: Ejercicio04NGSWITCH },
      { path: 'ejercicio05-ngfor', component: Ejercicio05NGFOR },
      { path: 'ejercicio06-formulariodinamico', component: Ejercicio06FORMULARIODINAMICO },
      { path: 'ejercicio06-detalleformulario', component: Ejercicio06Detalleformulario},
      { path: 'formularioincripcioncurso', component: Formularioincripcioncurso },
      { path: 'detallesincripcion', component: Detallesincripcion},
      { path: '', redirectTo: 'ejercicio01-ngstyle', pathMatch: 'full' }
    ]
  },

  // Rutas sueltas de ejercicios

  { path: 'detalleinmueble/:id/:titulo/:precio', component: Detalleinmueble },

  // Error
    { path: '**', component: ERRORNAVEGACION}
];
