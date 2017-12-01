import {Component, DoCheck, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UtenteService} from "../service/utente.service";


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck{

    public isLogged: boolean = false;

    constructor(private utenteService: UtenteService) {

    }

    ngOnInit() {
        if (this.utenteService.token !== 'defaultToken'){
            this.isLogged = true;
        }
        else{
            this.isLogged = false;
        }
    }

    ngDoCheck(){
        if (this.utenteService.token !== 'defaultToken'){
            this.isLogged = true;
        }
        else{
            this.isLogged = false;
        }
    }

}
