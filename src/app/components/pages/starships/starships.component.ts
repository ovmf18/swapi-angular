import { Starship } from './../../../models/interfaces';
import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../../services/swapi.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css'],
})
export class StarshipsComponent implements OnInit {
  isLoading = true;
  noResultsFound = false;

  constructor(private swapiService: SwapiService) {}

  resultStarships: Starship[] = [];
  columns: string[] = ['name', 'model', 'manufacturer', 'hyperdrive_rating'];
  searchTerm: string = '';

  getStarships(searchTerm?: string) {
    this.isLoading = true;
    this.swapiService.getStarships(searchTerm).subscribe(
      (res) => {
        this.resultStarships = res.results;
        this.noResultsFound = this.resultStarships.length === 0;
        this.isLoading = false;
      },
      (error) => {
        console.error('Erro ao buscar naves: ', error);
        this.isLoading = false;
      }
    );
  }

  searchStarships() {
    this.getStarships(this.searchTerm);
  }

  ngOnInit() {
    this.getStarships();
  }

  formatDate(data: string) {
    const dataObj = new Date(data);
    return dataObj.toLocaleDateString('pt-BR');
  }
}
