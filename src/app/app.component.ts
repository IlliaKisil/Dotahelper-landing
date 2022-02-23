import {Component} from '@angular/core';
import {heroes} from "./data";
import {HttpService} from "./service/http.service";

export interface Hero {
  "heroId": number,
  "heroName": string,
  "selected"?: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  heroes: Hero[] = heroes.map(hero => {
    return {
      ...hero,
      selected: false
    }
  })

  teamOneHeroes: Hero[] = []
  teamTwoHeroes: Hero[] = []
  recommendedHeroes: Hero[] = []

  constructor(private http: HttpService) { }

  select(id: number) {
    id = this.heroes.findIndex(hero => hero.heroId === id)
    if (this.heroes[id].selected) return;
    if (this.teamOneHeroes.length < 2) {
      this.heroes[id].selected = true
      this.teamOneHeroes.push({
        ...this.heroes[id ],
        selected: false
      })
    } else if (this.teamTwoHeroes.length < 2) {
      this.heroes[id].selected = true
      this.teamTwoHeroes.push({
        ...this.heroes[id ],
        selected: false
      })
    } else if (this.teamOneHeroes.length < 4) {
      this.heroes[id].selected = true
      this.teamOneHeroes.push({
        ...this.heroes[id ],
        selected: false
      })
    } else if (this.teamTwoHeroes.length < 4) {
      this.heroes[id].selected = true
      this.teamTwoHeroes.push({
        ...this.heroes[id],
        selected: false
      })
    } else if (this.teamOneHeroes.length < 5) {
      this.heroes[id].selected = true
      this.teamOneHeroes.push({
        ...this.heroes[id],
        selected: false
      })
    } else if (this.teamTwoHeroes.length < 5) {
      this.heroes[id].selected = true
      this.teamTwoHeroes.push({
        ...this.heroes[id],
        selected: false
      })
    }
  }

  getRecommended() {
    this.http.getHeroes(this.teamOneHeroes, this.teamTwoHeroes)
      .subscribe(her => this.recommendedHeroes = her)
  }


  returnHero(heroId: number, command: number) {
    const id = this.heroes.findIndex(hero => hero.heroId === heroId)
    this.heroes[id].selected = false
    if (command === 1) {
      this.teamOneHeroes = this.teamOneHeroes.filter(hero => hero.heroId !== heroId)
    } else {
      this.teamTwoHeroes = this.teamTwoHeroes.filter(hero => hero.heroId !== heroId)
    }

  }
}
