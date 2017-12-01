import {Component, EventEmitter, OnInit} from '@angular/core';
import {UtenteService} from "../service/utente.service";
import {Router} from "@angular/router";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public credenziali = {
        email: '',
        password: '',
    };

    public utente: any;



    constructor(private utenteService: UtenteService, private router : Router) {
    }

    ngOnInit() {
    }

    onSubmit(formData) {
        this.credenziali.email = formData.value.email;
        this.credenziali.password = formData.value.password;
        this.utenteService.login(this.credenziali)
            .subscribe(
                (response) => {
                    this.utente = JSON.parse(response['_body']);
                    this.utenteService.token = this.utente.api_token;
                    this.utenteService.utente = this.utente;
                    this.router.navigate(['home']);
                },
                (error) => console.log(error)
            );
    }

}
