import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class AmicoService {

    private baseUrl = 'http://193.205.129.103/backend/api/';

    constructor(private http: Http) {
    }


    getAmici() {
        return this.http.get(this.baseUrl+'inserzione/amico')
            .map(
                (response) => {
                    const data: any[] = response.json();
                    return data;
                },
                (error) => console.log(error)
            );
    }

    getAmicoByID(id) {
        return this.http.get(this.baseUrl+'inserzione/amico/'+id)
            .map(
                (response) => {
                    const data: any = response.json();
                    return data;
                },
                (error) => console.log(error)
            );
    }
}
