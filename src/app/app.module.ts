import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import {
    NgFor,
    NgIf,
    UpperCasePipe,
} from '@angular/common';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './services/hero.service';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        MessagesComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgFor,
        NgIf,
        UpperCasePipe,
    ],
    providers: [HeroService],
    bootstrap: [AppComponent],
})
export class AppModule {}
