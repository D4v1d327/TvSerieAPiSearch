import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { homeComponent } from './home/home.component';
import { profiloComponent } from './profilo/profilo.component';

const routes: Routes = [
    { path: 'home', component: homeComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: 'profilo', component: profiloComponent},

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }