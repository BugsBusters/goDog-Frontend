import {Component, OnInit} from '@angular/core';
import {InserzioniService} from "../service/inserzioni.service";
import {UtenteService} from "../service/utente.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-inserzioni',
    templateUrl: './inserzioni.component.html',
    styleUrls: ['./inserzioni.component.css']
})
export class InserzioniComponent implements OnInit {

    public inserzioni: any [];

    constructor(private inserzioniService: InserzioniService, public utenteService: UtenteService, private router: Router) {
    }

    ngOnInit() {
        if (this.utenteService.token !== 'defaultToken') {
            this.inserzioniService.getInserzioni(this.utenteService.token)
                .subscribe(
                    (response) => this.inserzioni = response,
                    (error) => console.log()
                );
        }
        else {
            this.router.navigate(['login']);
        }
    }

}
