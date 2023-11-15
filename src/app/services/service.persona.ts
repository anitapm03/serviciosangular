import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment.development";

//necesitamos devolver objetos Observable
import { Observable } from 'rxjs';
import { Global } from "../global";

@Injectable()
export class ServicePersonas {
    //en el constructor, debemos recibir el obj
    //httpClient para hacer las peticiones http
    constructor( private _http: HttpClient) {}

    //los métodos GET devolveran Observables
    getPersonas(): Observable<any> {
        //var urlApi = "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";
        var request = "api/personas";
        //var url = Global.urlApi + request;
        var url = environment.urlApi + request;
        //tenemos dos formas de trabajar con los servicios y sus promesas
        //1- igual que en VUE, crear una promesa en este método y devolver
        //los datos que extraemos de dicha promesa

        //2- devolver directamente la promesa para que el component se subscriba <--

        return this._http.get(url);
    }

    //asi se hace de la forma 1
    getPersonasPromesa(): Promise<any>{
        var urlApi = "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";

        let promise = new Promise((resolve) => {
            this._http.get(urlApi).subscribe((response) =>{
                resolve(response);
            })
        })

        return promise;

    }
}