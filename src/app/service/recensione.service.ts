import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class RecensioneService {

    public headers;
    private baseUrl = 'http://193.205.129.103/backend/api/';
    private tokenUrl = '?api_token=';

    constructor(private http: Http) {
    }


    getRecensioniByInserzioneId(id, token) {
        return this.http.get(this.baseUrl + 'recensioni/inserzione/' + id + this.tokenUrl + token)
            .map(
                (response) => {
                    const data: any[] = response.json();
                    console.log(data);
                    return data;
                },
                (error) => console.log(error)
            );
    }

}
