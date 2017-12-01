import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UtenteService} from "../service/utente.service";
import {InserzioniService} from "../service/inserzioni.service";
import {RecensioneService} from "../service/recensione.service";

@Component({
    selector: 'app-inserzione',
    templateUrl: './inserzione.component.html',
    styleUrls: ['./inserzione.component.css']
})
export class InserzioneComponent implements OnInit {

    public inserzione: any;
    private id: any;
    public recensioni: any[];

    constructor(private route: ActivatedRoute, private utenteService: UtenteService,
                private inserzioneService: InserzioniService, private router: Router,
                private recensioneService : RecensioneService,
    ) {
    }

    ngOnInit() {
        if (this.utenteService.token !== 'defaultToken') {
            this.route.params.subscribe(
                params => {
                    this.id = params['id'];
                });
            this.inserzioneService.getInserzioneById(this.id, this.utenteService.token)
                .subscribe(
                    (response) => this.inserzione = response,
                    (error) => console.log(error)
                );
            this.recensioneService.getRecensioniByInserzioneId(this.id, this.utenteService.token)
                .subscribe(
                    (response) => this.recensioni = response,
                    (error) => console.log(error)
                );
        }
        else {

            this.router.navigate(['login']);
        }
    }

}
