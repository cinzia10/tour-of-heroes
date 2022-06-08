import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HeroService } from 'src/app/services/hero/hero.service';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  selectedHero?: Hero;

  heroes: Hero[] = [];

  constructor(private heroServ: HeroService, private messageServ: MessageService) {
    this.getHeros()
   }

  ngOnInit(): void {
  }


onSelect(hero: Hero): void {
  this.selectedHero = hero;
  this.messageServ.add(`HeroesComponent: Eroe selezionato id=${this.selectedHero.id}`);
}

getHeros():void{
  this.heroServ.getHeroes()
  .subscribe({
    next: newHeroes => this.heroes = newHeroes,
    error: err => console.log(err)});
}

}
