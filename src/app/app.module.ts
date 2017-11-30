import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {ContattiComponent} from './contatti/contatti.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {NavbarComponent} from './navbar/navbar.component';
import {LoginComponent} from './login/login.component';
import {IndexComponent} from './index/index.component';
import {FooterComponent} from './footer/footer.component';


const routes: Routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'contatti',
        component: ContattiComponent
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
        FooterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
