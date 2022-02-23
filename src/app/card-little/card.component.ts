import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../app.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() hero: Hero | undefined;

  getImageLink(heroId: number){
    return `../../assets/images/heroes/${heroId}.png`
  }

}
