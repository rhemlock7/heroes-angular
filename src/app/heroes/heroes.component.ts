import { Hero } from '../types/hero';
import { Component } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrl: './heroes.component.scss',
})
export class HeroesComponent {
    heroes?: Hero[];
    selectedHero?: Hero;

    constructor(
        private heroService: HeroService,
        private messageService: MessageService
    ) {}

    getHeroes(): void {
        this.heroService
            .getHeroes()
            .subscribe(
                (heroes) => (this.heroes = heroes)
            );
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
        this.messageService.add(
            `HeroesComponent: Selected hero id=${hero.id}`
        );
    }
}
