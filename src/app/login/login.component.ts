import {Component, EventEmitter, OnInit} from '@angular/core';
import {UtenteService} from "../service/utente.service";


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



    constructor(private utenteService: UtenteService) {
    }

    ngOnInit() {
    }

    onSubmit(formData) {
        this.credenziali.email = formData.value.email;
        this.credenziali.password = formData.value.password;
        console.log(this.credenziali)
        this.utenteService.login(this.credenziali)
            .subscribe(
                (response) => {
                    this.utente = JSON.parse(response['_body']);
                    this.utenteService.token = this.utente.api_token;
                },
                (error) => console.log(error)
            );
    }

}
