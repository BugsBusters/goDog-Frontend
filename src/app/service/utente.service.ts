import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class UtenteService {
    public token: string = "defaultToken";
    public headers;
    private baseUrl = 'http://193.205.129.103/backend/api/';
    private tokenUrl = '?api_token=';
    public utente : any;


    constructor(private http: Http) {
    }


    getUtenti() {
        return this.http.get(this.baseUrl + 'utenti' + this.tokenUrl + this.token)
            .map(
                (response) => {
                    const data: any[] = response.json();
                    return data;
                }
            );
    }


    register(utente: any) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json: charset=utf-8');
        return this.http.post(this.baseUrl + 'register', utente, this.headers);
    }

    login(utente: any) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json: charset=utf-8');
        return this.http.post(this.baseUrl + 'login', utente, this.headers);
    }

}
