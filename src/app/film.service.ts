import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Film, FilmsResponse } from './models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  constructor(private http: HttpClient) {}

  getFilms(): Observable<Film[]> {
    return this.http
      .get<FilmsResponse>('/assets/films.json')
      .pipe(map((response) => response.results));
  }
}
