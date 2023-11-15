import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingProvider, routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule } from '@angular/forms';

import { ServicePersonas } from './services/service.persona';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { CochesapiComponent } from './components/cochesapi/cochesapi.component';
import { ServiceCoches } from './services/service.coches';
import { EmpleadosoficiosComponent } from './components/empleadosoficios/empleadosoficios.component';
import { ServiceEmpleados } from './services/service.empleados';
import { EmpleadosoficiosmultipleComponent } from './components/empleadosoficiosmultiple/empleadosoficiosmultiple.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    PersonasapiComponent,
    CochesapiComponent,
    EmpleadosoficiosComponent,
    EmpleadosoficiosmultipleComponent
  ],
  imports: [
    BrowserModule, FormsModule,
     routing, HttpClientModule
  ],
  providers: [appRoutingProvider, ServicePersonas,
     ServiceCoches, ServiceEmpleados],
  bootstrap: [AppComponent]
})
export class AppModule { }
