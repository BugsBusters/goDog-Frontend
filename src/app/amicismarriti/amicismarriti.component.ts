import {Component, OnInit} from '@angular/core';
import {AmicoService} from "../service/amico.service";

@Component({
    selector: 'app-amicismarriti',
    templateUrl: './amicismarriti.component.html',
    styleUrls: ['./amicismarriti.component.css']
})
export class AmicismarritiComponent implements OnInit {

    public amici: any[];

    constructor(private amicoService: AmicoService) {
    }

    ngOnInit() {
        this.amicoService.getAmici()
            .subscribe(
                (response) => this.amici = response,
                (error) => console.log(error)
            );
    }

}
