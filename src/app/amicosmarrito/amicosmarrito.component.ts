import {Component, OnInit} from '@angular/core';
import {AmicoService} from "../service/amico.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-amicosmarrito',
    templateUrl: './amicosmarrito.component.html',
    styleUrls: ['./amicosmarrito.component.css']
})
export class AmicosmarritoComponent implements OnInit {

    public id: any;
    public amico: any;

    constructor(private amicoService: AmicoService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.id = params['id'];
            });
        this.amicoService.getAmicoByID(this.id)
            .subscribe(
                (response) => this.amico = response,
                (error) => console.log(error)
            );
    }

}
