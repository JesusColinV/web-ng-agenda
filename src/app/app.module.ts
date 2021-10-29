import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateApointmentComponent } from './components/create-apointment/create-apointment.component';
import { ListApointmentComponent } from './components/list-apointment/list-apointment.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateApointmentComponent,
    ListApointmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
