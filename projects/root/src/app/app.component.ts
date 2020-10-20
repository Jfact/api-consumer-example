import { Component } from '@angular/core';

@Component({
  selector: 'b-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      min-width: 100%;
    }
  `]
})
export class AppComponent {}
