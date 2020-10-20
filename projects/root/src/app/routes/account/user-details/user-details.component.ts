import { Component, OnInit } from '@angular/core';
import {AccountService} from '../account.service';
import {UserModel} from '../../../services/api/models/user';

@Component({
  selector: 'b-account-details',
  template: `
    <div class="u-details" *ngIf="details">
      <h2 class="b-normal-font">
        User Details
        <a [routerLink]="['..', 'user-edit']">
          <small>
            <i class="fas fa-user-edit"></i>
            Edit
          </small>
        </a>
      </h2>
      <b-display-value label="Email:" [value]="details.email"></b-display-value>
      <b-display-value label="Phone number:" [value]="details.phoneNumber"></b-display-value>
      <b-display-value label="First name:" [value]="details.firstName"></b-display-value>
      <b-display-value label="Last name:" [value]="details.lastName"></b-display-value>
    </div>
    <p class="logout">
      <a (click)="onLogoutClick()">Logout</a>
    </p>
  `,
  styles: [`
      h2 {
        display: flex;
        justify-content: space-between;
      }
    .u-details p {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
    .u-details p strong {
      font-weight: bolder;
    }
    .logout {
      display: flex;
      justify-content: flex-end;
    }
    .logout:hover {
      cursor: pointer;
    }
  `]
})
export class UserDetailsComponent implements OnInit {

  details: UserModel;

  constructor(private account: AccountService) { }

  ngOnInit(): void {
    this.account.user.read().subscribe(res => this.details = res);
  }

  onLogoutClick() {
    this.account.logout();
  }

}
