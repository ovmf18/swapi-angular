import { MatPaginator } from '@angular/material/paginator';
import { SwapiService } from '../../../services/swapi.service';
import { Specie } from './../../../models/interfaces';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SpeciesDetailsComponent } from '../../modal/species-details/species-details.component';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css'],
})
export class SpeciesComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  totalSpecies: number = 0;
  pageSize: number = 10;
  currentPage: number = 1;

  isLoading = true;
  noResultsFound = false;

  ngAfterViewInit() {
    this.paginator.pageIndex = this.currentPage - 1;
  }

  constructor(private swapiService: SwapiService, public dialog: MatDialog) {}

  resultSpecies: Specie[] = [];
  columns: string[] = [
    'name',
    'classification',
    'designation',
    'average_lifespan',
  ];
  searchTerm: string = '';

  getSpecie(searchTerm?: string, page: number = 1) {
    this.isLoading = true;
    this.swapiService.getSpecie(searchTerm, page).subscribe(
      (res) => {
        this.resultSpecies = res.results;
        this.totalSpecies = res.count;
        this.isLoading = false;
        this.noResultsFound = res.count === 0;
      },
      (error) => {
        console.error('Erro ao buscar naves: ', error);
        this.isLoading = false;
        this.noResultsFound = true;
      }
    );
  }

  changePage(event: any) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.getSpecie(this.searchTerm, this.currentPage);
  }

  searchSpecies() {
    this.getSpecie(this.searchTerm);
  }

  ngOnInit() {
    this.getSpecie();
  }

  openDialog(specie: Specie): void {
    this.dialog.open(SpeciesDetailsComponent, {
      width: '500px',
      data: { specie: specie },
    });
  }

  formatDate(data: string) {
    const dataObj = new Date(data);
    return dataObj.toLocaleDateString('pt-BR');
  }
}
