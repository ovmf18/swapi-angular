import {
  ReturnAPI,
  Film,
  Starship,
  People,
  Planet,
  Specie,
  Vehicle,
} from './../models/interfaces';
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

  getStarships(
    searchTerm?: string,
    page: number = 1
  ): Observable<ReturnAPI<Starship>> {
    let url = `${this.baseUrl}starships/?page=${page}`;
    if (searchTerm) {
      url += `&search=${encodeURIComponent(searchTerm)}`;
    }
    return this.http.get<ReturnAPI<Starship>>(url);
  }

  getPeople(
    searchTerm?: string,
    page: number = 1
  ): Observable<ReturnAPI<People>> {
    let url = `${this.baseUrl}people/?page=${page}`;
    if (searchTerm) {
      url += `&search=${encodeURIComponent(searchTerm)}`;
    }
    return this.http.get<ReturnAPI<People>>(url);
  }

  getPlanet(
    searchTerm?: string,
    page: number = 1
  ): Observable<ReturnAPI<Planet>> {
    let url = `${this.baseUrl}planets/?page=${page}`;
    if (searchTerm) {
      url += `&search=${encodeURIComponent(searchTerm)}`;
    }
    return this.http.get<ReturnAPI<Planet>>(url);
  }

  getSpecie(
    searchTerm?: string,
    page: number = 1
  ): Observable<ReturnAPI<Specie>> {
    let url = `${this.baseUrl}species/?page=${page}`;
    if (searchTerm) {
      url += `&search=${encodeURIComponent(searchTerm)}`;
    }
    return this.http.get<ReturnAPI<Specie>>(url);
  }

  getVehicle(
    searchTerm?: string,
    page: number = 1
  ): Observable<ReturnAPI<Vehicle>> {
    let url = `${this.baseUrl}vehicles/?page=${page}`;
    if (searchTerm) {
      url += `&search=${encodeURIComponent(searchTerm)}`;
    }
    return this.http.get<ReturnAPI<Vehicle>>(url);
  }
}
