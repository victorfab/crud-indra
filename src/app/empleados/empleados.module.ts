import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosRoutingModule } from './empleados-routing.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { EmpleadoComponent } from './pages/empleado/empleado.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';




@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    EmpleadoComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule
  ]
})
export class EmpleadosModule { }
