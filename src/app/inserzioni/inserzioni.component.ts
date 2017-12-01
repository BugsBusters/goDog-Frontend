import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {InserzioniService} from "../service/inserzioni.service";
import {UtenteService} from "../service/utente.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-inserzioni',
    templateUrl: './inserzioni.component.html',
    styleUrls: ['./inserzioni.component.css']
})
export class InserzioniComponent implements OnInit, DoCheck {

    @Input() public inserzioni: any [];

    public tipo: any;

    constructor(private inserzioniService: InserzioniService, public utenteService: UtenteService,
                private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        if (this.utenteService.token !== 'defaultToken') {
            this.route.params.subscribe(
                params => {
                    if (params['tipo'] != null) {
                        this.tipo = params['tipo'];
                        this.inserzioniService.getInserzioniByTipo(params['tipo'], this.utenteService.token)
                            .subscribe(
                                (response) => this.inserzioni = response,
                                (error) => console.log()
                            );
                    } else {
                        this.inserzioniService.getInserzioni(this.utenteService.token)
                            .subscribe(
                                (response) => this.inserzioni = response,
                                (error) => console.log()
                            );
                    }
                }
            );
        }
        else {
            this.router.navigate(['login']);
        }
    }

    ngDoCheck() {

    }

    onSubmitCitta(formData) {
        console.log(formData.value);
        this.inserzioniService.getInserzioniByCitta(this.tipo, this.utenteService.token, formData.value.citta)
            .subscribe(
                (response) => {
                    console.log(response);
                    this.inserzioni = response;
                },
                (error) => console.log(error)
            );
    }

    onSubmitProvincia(formData) {
        console.log(formData.value);
        this.inserzioniService.getInserzioniByProvincia(this.tipo, this.utenteService.token, formData.value.provincia)
            .subscribe(
                (response) => {
                    console.log(response);
                    this.inserzioni = response;
                },
                (error) => console.log(error)
            );
    }

    onSubmitRegione(formData) {
        console.log(formData.value);
        this.inserzioniService.getInserzioniByRegione(this.tipo, this.utenteService.token, formData.value.regione)
            .subscribe(
                (response) => {
                    console.log(response);
                    this.inserzioni = response;
                },
                (error) => console.log(error)
            );
    }

}
