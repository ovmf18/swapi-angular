import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../../services/swapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  filmCount: number = 0;
  starshipCount: number = 0;
  peopleCount: number = 0;
  planetCount: number = 0;
  isLoading: boolean = true;

  constructor(private swapiService: SwapiService) {}

  ngOnInit() {
    let requestsPending = 3;

    this.swapiService.getFilms().subscribe((data) => {
      this.filmCount = data.count;
      this.checkIfLoadingComplete(--requestsPending);
    });

    this.swapiService.getStarships().subscribe((data) => {
      this.starshipCount = data.count;
      this.checkIfLoadingComplete(--requestsPending);
    });

    this.swapiService.getPeople().subscribe((data) => {
      this.peopleCount = data.count;
      this.checkIfLoadingComplete(--requestsPending);
    });

    this.swapiService.getPlanet().subscribe((data) => {
      this.planetCount = data.count;
      this.checkIfLoadingComplete(--requestsPending);
    });
  }

  private checkIfLoadingComplete(requestsPending: number) {
    if (requestsPending === 0) {
      this.isLoading = false;
    }
  }
}
