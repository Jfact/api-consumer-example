import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../services/api/models/user';
import {AppService} from '../../app.service';

@Component({
  selector: 'b-home',
  template: `
    <header>
      <div class="header-logo">
        <a [routerLink]="['']">
          <h2 class="b-normal-font">B - Engine</h2>
        </a>
      </div>
      <ul class="navigation">
        <ng-container *ngIf="userDetails; then UserAuthenticatedBlock else UserNotAuthenticatedBlock"></ng-container>
        <ng-template #UserAuthenticatedBlock>
          <li>
            <a [routerLink]="['account', 'user-details']">
              <ng-container *ngIf="userDetails.firstName || userDetails.lastName; else UserEmailBlock">
                {{userDetails.firstName}} {{userDetails.lastName}}
              </ng-container>
              <ng-template #UserEmailBlock>
                {{userDetails.email}}
              </ng-template>
            </a>
          </li>
        </ng-template>
        <ng-template #UserNotAuthenticatedBlock>
          <li>
            <a [routerLink]="['auth', 'user-login']">Login</a>
          </li>
          <li>
            <a [routerLink]="['auth', 'user-create']">Create account</a>
          </li>
        </ng-template>
      </ul>
    </header>
    <div class="content">
      <h2>
        Welcome to
        <br>
        <small>Bellato Engine</small></h2>
    </div>
    <footer>
      <p>
        All rights reserved
        <i class="far fa-copyright"></i>
        <a href="https://www.linkedin.com/in/denis-bakanov-a75219b9/" target="new"> Denis Bellato</a>
      </p>
    </footer>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    header {
      display: flex;
      justify-content: space-between;
      padding: 25px 50px;
    }
    header .header-logo a {
      color: #777d86;
    }
    header .header-logo a:hover {
      color: #5f656e;
    }
    header .navigation {
      display: flex;
      list-style: none;
    }
    header .navigation li {
      margin: 0 10px;
    }
    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
    .content h2 {
      font-weight: normal;
      font-size: 52px;
    }
    .content h2 small {
      font-size: 32px;
      margin-left: 150px
    }
    footer {
        display: flex;
        padding: 25px 50px;
      }
  `]
})
export class HomeComponent implements OnInit {

  userDetails: UserModel;

  constructor(private app: AppService) {}

  ngOnInit(): void {
    if (this.app.token) {
      this.app.user.read().subscribe(res => this.userDetails = res);
    }
  }

}
