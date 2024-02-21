import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../../film.service';
import { Film } from '../../../models/interfaces';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent implements OnInit {
  columnLabels: { [key: string]: string } = {
    title: 'Title',
    episode_id: 'Episode',
    director: 'Director',
    release_date: 'Release Date',
  };

  displayedColumns: string[] = Object.keys(this.columnLabels);
  dataSource: Film[] = [];

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.filmService.getFilms().subscribe((data: Film[]) => {
      this.dataSource = data;
    });
  }
}
