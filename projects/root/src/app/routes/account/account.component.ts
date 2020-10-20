import {Component} from '@angular/core';


@Component({
  selector: 'b-account',
  template: `
    <div class="inner">
      <router-outlet></router-outlet>
      <p class="home-link">
        <a [routerLink]="['']">
          <i class="fas fa-long-arrow-alt-left"></i> Go back home
        </a>
      </p>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      margin: 50px 60px;
      border: 1px solid rgba(0,0,0, 0.2);
    }
    .inner {
      width: 500px;
    }
      .home-link {
        display: flex;
        justify-content: flex-end;
        padding: 25px 0;
      }
  `]
})
export class AccountComponent {}
