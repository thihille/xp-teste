import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { BuscaComponent } from './busca/busca.component';
import { BuscaService } from './busca/busca.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    BuscaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
