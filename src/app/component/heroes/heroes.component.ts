import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HEROES } from 'src/app/model/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  hero: Hero = {
    name: 'Windstorm',
    id: 23
  };
  selectedHero?: Hero;

  heroes = HEROES;

  constructor() { }

  ngOnInit(): void {
  }


onSelect(hero: Hero): void {
  this.selectedHero = hero;
  console.log(this.selectedHero);
}

}
