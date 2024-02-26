import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Starship } from '../../../models/interfaces';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css'],
})
export class StarshipDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { starship: Starship }) {}
}
