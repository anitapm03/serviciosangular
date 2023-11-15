import { HomeComponent } from "./components/home/home.component";

import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';
import { PersonasapiComponent } from "./components/personasapi/personasapi.component";
import { CochesapiComponent } from "./components/cochesapi/cochesapi.component";
import { EmpleadosoficiosComponent } from "./components/empleadosoficios/empleadosoficios.component";

const appRoutes: Routes = [
    { path: "", component: HomeComponent},
    { path: "personas", component: PersonasapiComponent},
    { path: "coches", component: CochesapiComponent},
    { path: "empleados", component: EmpleadosoficiosComponent}
]

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any>=
RouterModule.forRoot(appRoutes);