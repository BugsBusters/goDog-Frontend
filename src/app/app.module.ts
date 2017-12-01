import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {ContattiComponent} from './contatti/contatti.component';
import {NavbarComponent} from './navbar/navbar.component';
import {LoginComponent} from './login/login.component';
import {IndexComponent} from './index/index.component';
import {FooterComponent} from './footer/footer.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ListaUtentiComponent} from './lista-utenti/lista-utenti.component';
import {PricelistComponent} from "./pricelist/pricelist.component";
import {UtenteService} from "./service/utente.service";
import {InserzioniComponent} from "./inserzioni/inserzioni.component";
import {InserzioniService} from "./service/inserzioni.service";
import {LogoutComponent} from './logout/logout.component';
import {InserzioneComponent} from './inserzione/inserzione.component';
import {RecensioneService} from "./service/recensione.service";
import {AmicosmarritoComponent} from './amicosmarrito/amicosmarrito.component';
import {AmicoService} from "./service/amico.service";
import {AmicismarritiComponent} from './amicismarriti/amicismarriti.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'contatti',
        component: ContattiComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'registrazione',
        component: ListaUtentiComponent
    },
    {
        path: 'registrazione/:tipo',
        component: PricelistComponent
    },
    {
        path: 'registrazione/:tipo/:piano',
        component: SignUpComponent
    },
    {
        path: 'inserzioni',
        component: InserzioniComponent
    },
    {
        path: 'inserzioni/:tipo',
        component: InserzioniComponent,
    },
    {
        path: 'inserzione/:id',
        component: InserzioneComponent
    },
    {
        path: 'inserzione/:citta',
        component: InserzioneComponent
    },
    {
        path: 'inserzione/:provincia',
        component: InserzioneComponent
    },
    {
        path: 'inserzione/:regione',
        component: InserzioneComponent
    },
    {
        path: 'amico-smarrito',
        component: AmicismarritiComponent
    },
    {
        path: 'amico-smarrito/:id',
        component: AmicosmarritoComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        ContattiComponent,
        SignUpComponent,
        NavbarComponent,
        LoginComponent,
        IndexComponent,
        FooterComponent,
        ListaUtentiComponent,
        PricelistComponent,
        InserzioniComponent,
        LogoutComponent,
        InserzioneComponent,
        AmicosmarritoComponent,
        AmicismarritiComponent,
        HomeComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes),
    ],
    providers: [
        UtenteService,
        InserzioniService,
        RecensioneService,
        AmicoService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
