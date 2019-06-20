import { Component, OnInit } from '@angular/core'
//import { HEROES } from '../mock-heroes'
import { HeroService } from '../hero.service'
import { Hero } from '../Hero.class';

@Component({
  selector: 'app-heroes',
  templateUrl: './HeroesComponent.html',
  styleUrls: ['./heroes.component.css']

})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }
}
