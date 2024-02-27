import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Specie } from '../../../models/interfaces';

@Component({
  selector: 'app-species-details',
  templateUrl: './species-details.component.html',
  styleUrls: ['./species-details.component.css'],
})
export class SpeciesDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { specie: Specie }) {}
}
