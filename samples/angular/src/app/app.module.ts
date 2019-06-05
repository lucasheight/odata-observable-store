import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { FlightsComponent } from './flights/flights.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PeopleComponent } from './people/people.component';
import { OdataInterceptorService } from './services/odata-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:OdataInterceptorService,multi:true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
