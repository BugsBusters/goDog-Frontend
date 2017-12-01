import {Component, OnInit} from '@angular/core';
import {UtenteService} from "../service/utente.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public utente: any;

    constructor(public utenteService: UtenteService, private router: Router) {
    }

    ngOnInit() {
        if (this.utenteService.token !== 'defaultToken')
            this.utente = this.utenteService.utente;
        else
            this.router.navigate(['login']);
    }

}
