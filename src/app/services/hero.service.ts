import { Injectable } from '@angular/core';
import { Hero } from '../types/hero';
import { HEROES } from '../constants/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root',
})
export class HeroService {
    constructor(
        private messageService: MessageService
    ) {}

    getHeroes(): Observable<Hero[]> {
        const heroes = of(HEROES);
        this.messageService.add(
            'HeroService: fetched heroes'
        );
        return heroes;
    }
}
