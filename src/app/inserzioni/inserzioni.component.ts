import { Component, OnInit } from '@angular/core';
import {InserzioniService} from "../service/inserzioni.service";
import {UtenteService} from "../service/utente.service";

@Component({
  selector: 'app-inserzioni',
  templateUrl: './inserzioni.component.html',
  styleUrls: ['./inserzioni.component.css']
})
export class InserzioniComponent implements OnInit {

  public inserzioni: any [];

  constructor(private inserzioniService: InserzioniService, public utenteService : UtenteService) {
  }

  ngOnInit() {
    console.log("token", this.utenteService.token);
    this.inserzioniService.getInserzioni()
        .subscribe(
            (response) => console.log(response),
            (error) => console.log()
        );

  }

}
