import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {FormulariosReativosComponent} from "./components/formularios-reativos/formularios-reativos.component";


@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    FormulariosReativosComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
