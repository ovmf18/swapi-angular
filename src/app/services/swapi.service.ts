import { ReturnAPI, Film } from './../models/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  private baseUrl = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) {}

  getFilms(): Observable<ReturnAPI<Film>> {
    return this.http.get<ReturnAPI<Film>>(`${this.baseUrl}/films`);
  }
}
