import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class ContatoService {


    constructor(private httpClient: HttpClient) { }




    enviarFormulario (objeto: any): Observable<string> {
        let headers = new HttpHeaders();

        headers.append('Content-Type', 'application/json; charset=utf-8');
        return this.httpClient.post<string>("http://www.onlineplano.com.br/envia-formulario.php", objeto,{headers});
    }


}
