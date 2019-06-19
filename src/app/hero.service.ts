import { Injectable } from '@angular/core';
import { Hero } from './Hero.class';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }


getHeroes(): Observable<Hero[]> {
  this.messageService.add('HeroService: Fetched heroes');
  return of(HEROES);
}
}