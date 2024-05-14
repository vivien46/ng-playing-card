import { Component } from '@angular/core';
import { PlayingCardsComponent } from './components/playing-cards/playing-cards.component';
import { Monster } from './models/monster.model';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayingCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  monster1!: Monster;
  
  constructor() {
    this.monster1 = new Monster();
    this.monster1.name ="Pik";
    this.monster1.hp = 40;
    this.monster1.figureCaption = "N°002";
  }
}
