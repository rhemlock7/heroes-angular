import { Component, Input } from '@angular/core';
import { Hero } from '../types/hero';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrl: './hero-detail.component.scss',
})
export class HeroDetailComponent {
    @Input() selectedHero?: Hero;
}
