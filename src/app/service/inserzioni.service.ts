import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class InserzioniService {

    public headers;
    private baseUrl = 'http://193.205.129.103/backend/api/';

  constructor(private http: Http) { }

  getInserzioni() {
    this.http.get(this.baseUrl + 'inserzioni')
        .map(
            (response) => {
                const data: any[] = response.json();
                console.log(data);
                return data;
            }
        );
  }
}
