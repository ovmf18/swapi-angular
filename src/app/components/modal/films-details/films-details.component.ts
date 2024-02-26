import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Film } from '../../../models/interfaces';

@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.component.html',
  styleUrls: ['./films-details.component.css'],
})
export class FilmsDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { film: Film }) {}
}
