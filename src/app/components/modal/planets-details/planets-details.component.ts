import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Planet } from '../../../models/interfaces';

@Component({
  selector: 'app-planets-details',
  templateUrl: './planets-details.component.html',
  styleUrls: ['./planets-details.component.css'],
})
export class PlanetsDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { planet: Planet }) {}
}
