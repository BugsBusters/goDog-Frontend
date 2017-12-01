import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class InserzioniService {

    public headers;
    private baseUrl = 'http://193.205.129.103/backend/api/';

  constructor(private http: Http) { }

  getInserzioni() {
   return this.http.get(this.baseUrl + 'inserzioni?api_token=jpZwrlF5LaQCWDik8SQAAKXbVVjrhEDbxMPA20yC9F2dKvtjXgTZY3VIzUbr')
        .map(
            (response) => {
                const data: any[] = response.json();
                return data;
            },
            (error) => console.log(error)
        );
  }
}
