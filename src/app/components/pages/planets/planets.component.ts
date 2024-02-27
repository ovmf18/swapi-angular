import { MatPaginator } from '@angular/material/paginator';
import { SwapiService } from '../../../services/swapi.service';
import { Planet } from './../../../models/interfaces';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlanetsDetailsComponent } from '../../modal/planets-details/planets-details.component';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
})
export class PlanetsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  totalPlanets: number = 0;
  pageSize: number = 10;
  currentPage: number = 1;

  isLoading = true;
  noResultsFound = false;

  ngAfterViewInit() {
    this.paginator.pageIndex = this.currentPage - 1;
  }

  constructor(private swapiService: SwapiService, public dialog: MatDialog) {}

  resultPlanets: Planet[] = [];
  columns: string[] = ['name', 'terrain', 'climate', 'population'];
  searchTerm: string = '';

  getPlanet(searchTerm?: string, page: number = 1) {
    this.isLoading = true;
    this.swapiService.getPlanet(searchTerm, page).subscribe(
      (res) => {
        this.resultPlanets = res.results;
        this.totalPlanets = res.count;
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
    this.getPlanet(this.searchTerm, this.currentPage);
  }

  searchPlanet() {
    this.getPlanet(this.searchTerm);
  }

  ngOnInit() {
    this.getPlanet();
  }

  openDialog(planet: Planet): void {
    this.dialog.open(PlanetsDetailsComponent, {
      width: '500px',
      data: { planet: planet },
    });
  }

  formatDate(data: string) {
    const dataObj = new Date(data);
    return dataObj.toLocaleDateString('pt-BR');
  }
}
