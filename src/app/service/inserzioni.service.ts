import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class InserzioniService {

    public headers;
    private baseUrl = 'http://193.205.129.103/backend/api/';
    private tokenUrl = '?api_token=';

    constructor(private http: Http) {
    }

    getInserzioni(token) {
        return this.http.get(this.baseUrl + 'inserzioni' + this.tokenUrl + token)
            .map(
                (response) => {
                    const data: any[] = response.json();
                    return data;
                },
                (error) => console.log(error)
            );
    }

    getInserzioneById(id, token) {
        return this.http.get(this.baseUrl + 'inserzione/' + id + this.tokenUrl + token)
            .map(
                (response) => {
                    const data: any = response.json();
                    console.log(data);
                    return data;
                },
                (error) => console.log(error)
            );
    }

    getInserzioniByTipo(tipo, token) {
        return this.http.get(this.baseUrl + 'inserzioni/' + tipo + this.tokenUrl + token)
            .map(
                (response) => {
                    const data: any[] = response.json();
                    return data;
                },
                (error) => console.log(error)
            );
    }

    getInserzioniByCitta(tipo, token, citta) {
        return this.http.get(this.baseUrl + 'inserzione-lookup' + this.tokenUrl + token + "&tipo=" + tipo + "&citta=" + citta)
            .map(
                (response) => {
                    const data: any[] = response.json();
                    return data;
                },
                (error) => console.log(error)
            );
    }

    getInserzioniByProvincia(tipo, token, citta) {
        return this.http.get(this.baseUrl + 'inserzione-lookup' + this.tokenUrl + token + "&tipo=" + tipo + "&provincia=" + citta)
            .map(
                (response) => {
                    const data: any[] = response.json();
                    return data;
                },
                (error) => console.log(error)
            );
    }
    getInserzioniByRegione(tipo, token, citta) {
        return this.http.get(this.baseUrl + 'inserzione-lookup' + this.tokenUrl + token + "&tipo=" + tipo + "&regione=" + citta)
            .map(
                (response) => {
                    const data: any[] = response.json();
                    return data;
                },
                (error) => console.log(error)
            );
    }
}
