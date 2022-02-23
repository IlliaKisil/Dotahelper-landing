import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../app.component";

@Component({
  selector: 'little-card',
  templateUrl: './little-card.component.html',
  styleUrls: ['./little-card.component.scss']
})
export class LittleCardComponent {

  @Input() hero: Hero | undefined;

  getImageLink(heroId: number){
    return `../../assets/images/heroes/${heroId}.png`
  }

}
