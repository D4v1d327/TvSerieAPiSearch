import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { homeComponent } from './home/home.component';
import { dettaglioComponent } from './dettaglio/dettaglio.component';
import { episodiComponent } from './episodi/episodi.component';

const routes: Routes = [
    { path: 'home', component: homeComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: 'dettaglio/:id', component: dettaglioComponent}, // /:id = passa l'id al momento del routing
    { path: 'episodi/:id', component: episodiComponent},

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }