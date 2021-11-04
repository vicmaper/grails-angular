import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AlumnosDetailsComponent } from "./alumnos-details/alumnos-details.component";
import { AlumnosEditComponent } from "./alumnos-edit/alumnos-edit.component";
import { AlumnosCreateComponent } from "./alumnos-create/alumnos-create.component";
import {IndexComponent} from "./index/index.component";
import { AlumnosComponent } from "./alumnos/alumnos.component";
const routes: Routes = [
  {
    path: 'alumnos',
    component: AlumnosComponent,
    data: { title: 'Lista Alumnos' }
  },
 {
    path: 'alumnos-create',
    component: AlumnosCreateComponent,
    data: { title: 'Registrar Alumno' }
   },
  {
    path: 'alumnos-details/:id',
    component: AlumnosDetailsComponent,
    data: { title: 'Detalles de alumno' }
  },
  {
    path: 'alumnos-edit/:id',
    component: AlumnosEditComponent,
    data: { title: 'Editar alumno' }
   },
  { path: '',
    redirectTo: '/alumnos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}