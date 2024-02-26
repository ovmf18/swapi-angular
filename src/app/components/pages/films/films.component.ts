import { SwapiService } from './../../../services/swapi.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Film } from '../../../models/interfaces';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { FilmsDetailsComponent } from '../../modal/films-details/films-details.component';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  totalFilms: number = 0;
  pageSize: number = 10;
  currentPage: number = 1;

  isLoading = true;
  noResultsFound = false;

  ngAfterViewInit() {
    this.paginator.pageIndex = this.currentPage - 1;
  }

  constructor(private swapiService: SwapiService, public dialog: MatDialog) {}

  resultFilms: Film[] = [];
  columns: string[] = ['title', 'director', 'producer', 'release_date'];
  searchTerm: string = '';

  getFilms(searchTerm?: string, page: number = 1) {
    this.isLoading = true;
    this.swapiService.getFilms(this.searchTerm).subscribe(
      (res) => {
        this.resultFilms = res.results;
        this.totalFilms = res.count;
        this.isLoading = false;
      },
      (error) => {
        console.error('Erro ao buscar naves: ', error);
        this.isLoading = false;
      }
    );
  }

  changePage(event: any) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.getFilms(this.searchTerm, this.currentPage);
  }

  searchFilms() {
    this.getFilms(this.searchTerm);
  }

  ngOnInit() {
    this.getFilms();
  }

  openDialog(film: Film): void {
    this.dialog.open(FilmsDetailsComponent, {
      width: '500px',
      data: { film: film },
    });
  }

  formatDate(data: string) {
    const dataObj = new Date(data);
    return dataObj.toLocaleDateString('pt-BR');
  }
}
