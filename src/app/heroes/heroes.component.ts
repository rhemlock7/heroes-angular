import { Hero } from './../types/hero';
import { Component } from '@angular/core';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrl: './heroes.component.scss',
})
export class HeroesComponent {
    hero: Hero = {
        id: 1,
        name: 'Windstorm',
    };
}
