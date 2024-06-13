import { Component } from '@angular/core';
import { PlayingCardsComponent } from './components/playing-cards/playing-cards.component';
import { Monster } from './models/monster.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayingCardsComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  monster1!: Monster;

  count: number = 0;
  
  constructor() {
    this.monster1 = new Monster();
    this.monster1.name ="Pikachu";
    this.monster1.hp = 40;
    this.monster1.figureCaption = "N°002 " + this.monster1.name;
  }

  increaseCount() {
    this.count++;
  }
}
