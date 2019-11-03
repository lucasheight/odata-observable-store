import { Component } from "@angular/core";
@Component({
  selector: "lh-root",
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>Welcome to {{ title }}!</h1>
    </div>
    <app-people></app-people>
    <div>
      <app-kendo-grid></app-kendo-grid>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = "TripPin RESTier OData V4 Service";
}
