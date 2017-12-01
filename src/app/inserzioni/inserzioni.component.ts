import { Component, OnInit } from '@angular/core';
import {InserzioniService} from "../service/inserzioni.service";

@Component({
  selector: 'app-inserzioni',
  templateUrl: './inserzioni.component.html',
  styleUrls: ['./inserzioni.component.css']
})
export class InserzioniComponent implements OnInit {

  public inserzioni: any [];

  constructor(private inserzioniService: InserzioniService) {
  }

  ngOnInit() {
    this.inserzioniService.getInserzioni()
        .subscribe(
            (response) => this.inserzioni = response,
            (error) => console.log(error)
        );

  }

}
