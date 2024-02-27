import { People } from './../../../models/interfaces';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css'],
})
export class PeopleDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { people: People }) {}
}
