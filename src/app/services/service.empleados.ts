import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment.development";
import { Observable } from 'rxjs';

@Injectable() 
export class ServiceEmpleados {

    constructor(private _http: HttpClient) {}

    getFunciones(): Observable<any>{

        var request = "api/plantilla/funciones";
        var url = environment.apiEmpleados + request;

        return this._http.get(url);
    }

    getEmpleadosFuncion(funcion: string): Observable<any> {

        var request = "api/plantilla/plantillafuncion/" + funcion ;
        var url = environment.apiEmpleados + request;

        return this._http.get(url);
    }

    getEmpleadosMultiple(seleccion:any): Observable<any>{

        var req = "api/Plantilla/PlantillaFunciones?";
        for (var i = 0; i < seleccion.length; i++){
            req += "funcion=" + seleccion[i] + "&";
        }
        var request = req.slice(0, -1);

        var url = environment.apiEmpleados + request;

        return this._http.get(url);
    }
}