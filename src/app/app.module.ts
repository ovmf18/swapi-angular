import { MatPaginatorModule } from '@angular/material/paginator';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './components/pages/home/home.component';
import { FilmsComponent } from './components/pages/films/films.component';
import { StarshipsComponent } from './components/pages/starships/starships.component';
import { HeaderComponent } from './components/header/header.component';
import { StarshipDetailsComponent } from './components/modal/starship-details/starship-details.component';
import { FilmsDetailsComponent } from './components/modal/films-details/films-details.component';
import { PeopleComponent } from './components/pages/people/people.component';
import { PeopleDetailsComponent } from './components/modal/people-details/people-details.component';
import { PlanetsComponent } from './components/pages/planets/planets.component';
import { PlanetsDetailsComponent } from './components/modal/planets-details/planets-details.component';
import { SpeciesDetailsComponent } from './components/modal/species-details/species-details.component';
import { SpeciesComponent } from './components/pages/species/species.component';
import { VehicleComponent } from './components/pages/vehicle/vehicle.component';
import { VehicleDetailsComponent } from './components/modal/vehicle-details/vehicle-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmsComponent,
    StarshipsComponent,
    HeaderComponent,
    StarshipDetailsComponent,
    FilmsDetailsComponent,
    PeopleComponent,
    PeopleDetailsComponent,
    PlanetsComponent,
    PlanetsDetailsComponent,
    SpeciesDetailsComponent,
    SpeciesComponent,
    VehicleComponent,
    VehicleDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatTableModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
