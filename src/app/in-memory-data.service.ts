import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './Hero.class';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 15, name: "Sloth Saver" },
      { id: 32, name: "Goose Chrusher" },
      { id: 67, name: "Mac and Cheese Man" },
      { id: 5, name: "Withum Funny-Bucks" },
      { id: 93, name: "The Noise Canceller" },
      { id: 72, name: "RIP Gladys" },
      { id: 12, name: "The Lizard" },
      { id: 86, name: "The Cringe King" },
      { id: 501, name: "Burrito Bro" },
      { id: 9999999999999, name: "Door Dash Duo" }

    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}