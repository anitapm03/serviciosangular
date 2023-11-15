import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

import { Observable } from 'rxjs';

@Injectable()
export class ServiceCoches {

    constructor(private _http: HttpClient) {}

    getCoches(): Observable<any>{

        var request = "webresources/coches";
        var url = environment.apiCoches + request;

        return this._http.get(url);

    }
}