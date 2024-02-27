import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../../services/swapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  filmCount: number = 0;
  starshipCount: number = 0;

  constructor(private swapiService: SwapiService) {}

  ngOnInit() {
    this.swapiService.getFilms().subscribe((data) => {
      this.filmCount = data.count;
    });

    this.swapiService.getStarships().subscribe((data) => {
      this.starshipCount = data.count;
    });
  }
}
