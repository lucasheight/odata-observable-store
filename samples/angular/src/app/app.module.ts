import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PeopleComponent } from './people/people.component';
import { OdataInterceptorService } from './services/odata-interceptor.service';
import { KendoGridComponent } from './kendo-grid/kendo-grid.component';
import {GridModule} from "@progress/kendo-angular-grid";

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    KendoGridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    GridModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:OdataInterceptorService,multi:true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
