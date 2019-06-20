import { Component, OnInit } from '@angular/core';
import { HEROES} from '../mock-heroes';
import { HeroService } from '../hero.service';
import { Hero } from '../Hero.class';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void{
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
  }


