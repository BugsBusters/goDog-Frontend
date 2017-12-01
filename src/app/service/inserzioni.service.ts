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
                    console.log(data);
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
}
