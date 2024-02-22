import { SwapiService } from './../../../services/swapi.service';
import { HttpClient } from '@angular/common/http';
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

  getFilms() {
    this.swapiService.getFilms().subscribe((res) => {
      this.resultFilms = res.results;
      this.isLoading = false;
    });
  }

  ngOnInit() {
    this.getFilms();
  }

  formatDate(data: string) {
    const dataObj = new Date(data);
    return dataObj.toLocaleDateString('pt-BR');
  }
}
