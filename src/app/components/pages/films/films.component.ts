import { SwapiService } from './../../../services/swapi.service';
import { Component, OnInit } from '@angular/core';
import { Film } from '../../../models/interfaces';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent implements OnInit {
  isLoading = true;

  constructor(private swapiService: SwapiService) {}

  resultFilms: Film[] = [];
  columns: string[] = ['title', 'director', 'producer', 'release_date'];
  searchTerm: string = '';

  getFilms(searchTerm?: string) {
    this.isLoading = true;
    this.swapiService.getFilms(searchTerm).subscribe(
      (res) => {
        this.resultFilms = res.results;
        this.isLoading = false;
      },
      (error) => {
        console.error('Erro ao buscar filmes: ', error);
        this.isLoading = false;
      }
    );
  }

  searchFilms() {
    this.getFilms(this.searchTerm);
  }

  ngOnInit() {
    this.getFilms();
  }

  formatDate(data: string) {
    const dataObj = new Date(data);
    return dataObj.toLocaleDateString('pt-BR');
  }
}
