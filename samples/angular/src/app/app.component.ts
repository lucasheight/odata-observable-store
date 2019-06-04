import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
        Welcome to {{title}}!
      </h1>
    </div>
<app-people></app-people>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'angular';
}
