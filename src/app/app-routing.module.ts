import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FilmsComponent } from './components/pages/films/films.component';
import { StarshipsComponent } from './components/pages/starships/starships.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'starships', component: StarshipsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
