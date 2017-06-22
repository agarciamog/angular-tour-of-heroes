import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Hero } from './hero';
import { HeroService } from './hero.service';

/*  Ng
  Iterating - *ngFor
  Conditional If - *ngIf
  Event Handler - (click)="onSlected(hero)"
  Property Binding - [class.selected]="hero === selectedHero"
*/

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html' ,
  styleUrls: [ './heroes.component.css' ],
  providers: []
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  ngOnInit(): void { // instantiates heroes after constructor excecutes
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    // (param1, param2, …, paramN) => { statements }
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
