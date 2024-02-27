import { Starship } from './../../../models/interfaces';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SwapiService } from '../../../services/swapi.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { StarshipDetailsComponent } from '../../modal/starship-details/starship-details.component';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css'],
})
export class StarshipsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  totalStarships: number = 0;
  pageSize: number = 10;
  currentPage: number = 1;

  isLoading = true;
  noResultsFound = false;

  ngAfterViewInit() {
    this.paginator.pageIndex = this.currentPage - 1;
  }

  constructor(private swapiService: SwapiService, public dialog: MatDialog) {}

  resultStarships: Starship[] = [];
  columns: string[] = ['name', 'model', 'manufacturer', 'hyperdrive_rating'];
  searchTerm: string = '';

  getStarships(searchTerm?: string, page: number = 1) {
    this.isLoading = true;
    this.swapiService.getStarships(searchTerm, page).subscribe(
      (res) => {
        this.resultStarships = res.results;
        this.totalStarships = res.count;
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
    this.getStarships(this.searchTerm, this.currentPage);
  }

  searchStarships() {
    this.getStarships(this.searchTerm);
  }

  ngOnInit() {
    this.getStarships();
  }

  openDialog(starship: Starship): void {
    this.dialog.open(StarshipDetailsComponent, {
      width: '500px',
      data: { starship: starship },
    });
  }

  formatDate(data: string) {
    const dataObj = new Date(data);
    return dataObj.toLocaleDateString('pt-BR');
  }
}
