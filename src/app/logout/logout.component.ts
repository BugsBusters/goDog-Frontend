import { Component, OnInit } from '@angular/core';
import {UtenteService} from "../service/utente.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private utenteService : UtenteService, private router : Router) { }

  ngOnInit() {
    this.utenteService.token = 'defaultToken';
    this.router.navigate(['/']);
  }

}
