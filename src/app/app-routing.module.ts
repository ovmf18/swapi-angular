import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FilmsComponent } from './components/pages/films/films.component';
import { StarshipsComponent } from './components/pages/starships/starships.component';
import { PeopleComponent } from './components/pages/people/people.component';
import { PlanetsComponent } from './components/pages/planets/planets.component';
import { SpeciesComponent } from './components/pages/species/species.component';
import { VehicleComponent } from './components/pages/vehicle/vehicle.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'starships', component: StarshipsComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'species', component: SpeciesComponent },
  { path: 'vehicles', component: VehicleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
