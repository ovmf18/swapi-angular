import { People } from './../../../models/interfaces';
import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { SwapiService } from '../../../services/swapi.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { PeopleDetailsComponent } from '../../modal/people-details/people-details.component';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  totalPeople: number = 0;
  pageSize: number = 10;
  currentPage: number = 1;

  isLoading = true;
  noResultsFound = false;

  ngAfterViewInit() {
    this.paginator.pageIndex = this.currentPage - 1;
  }

  constructor(private swapiService: SwapiService, public dialog: MatDialog) {}

  resultPeople: People[] = [];
  columns: string[] = ['name', 'height', 'birth_year', 'skin_color'];
  searchTerm: string = '';

  getPeople(searchTerm?: string, page: number = 1) {
    this.isLoading = true;
    this.swapiService.getPeople(searchTerm, page).subscribe(
      (res) => {
        this.resultPeople = res.results;
        this.totalPeople = res.count;
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
    this.getPeople(this.searchTerm, this.currentPage);
  }

  searchPeople() {
    this.getPeople(this.searchTerm);
  }

  ngOnInit() {
    this.getPeople();
  }

  openDialog(people: People): void {
    this.dialog.open(PeopleDetailsComponent, {
      width: '500px',
      data: { people: people },
    });
  }

  formatDate(data: string) {
    const dataObj = new Date(data);
    return dataObj.toLocaleDateString('pt-BR');
  }
}
