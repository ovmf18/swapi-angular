import { ReturnAPI, Film, Starship } from './../models/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  private baseUrl = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) {}

  getFilms(searchTerm?: string): Observable<ReturnAPI<Film>> {
    const url = searchTerm
      ? `${this.baseUrl}films/?search=${encodeURIComponent(searchTerm)}`
      : `${this.baseUrl}films`;
    return this.http.get<ReturnAPI<Film>>(url);
  }

  getStarships(searchTerm?: string): Observable<ReturnAPI<Starship>> {
    const url = searchTerm
      ? `${this.baseUrl}starships/?search=${encodeURIComponent(searchTerm)}`
      : `${this.baseUrl}starships`;
    return this.http.get<ReturnAPI<Starship>>(url);
  }
}
