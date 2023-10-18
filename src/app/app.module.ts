import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
//import { CVTemplateComponent } from './CV-template/CV-template.component';
import{AppRoutingModule} from './app-routing.module';
import { homeComponent } from './home/home.component';
import { dettaglioComponent } from './dettaglio/dettaglio.component';
import { HttpClientModule } from '@angular/common/http'; // richieste a backend



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent, 
   homeComponent,
   dettaglioComponent
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/