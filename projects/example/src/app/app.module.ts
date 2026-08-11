import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import { PeopleComponent } from "./people/people.component";
import { OdataInterceptorService } from "./services/odata-interceptor.service";

@NgModule({
  declarations: [AppComponent, PeopleComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: OdataInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
