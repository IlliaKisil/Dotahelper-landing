import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hero} from "../app.component";
import {API} from "../data";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getHeroes(team1: Hero[], team2: Hero[]): Observable<Hero[]> {
    let params = new HttpParams();


    team1.forEach((hero) =>{
      params = params.append(`Team1`, hero.heroId);
    })
    team2.forEach((hero) =>{
      params = params.append(`Team2`, hero.heroId);
    })
    return this.http.get<Hero[]>(`${API}`, {params,       headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers':'X-Requested-With'
      })})
  }
}
