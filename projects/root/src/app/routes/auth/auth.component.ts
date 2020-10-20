import { Component, OnInit } from '@angular/core';
import {AUTH_FORM_NAMES, AuthFormNames, AuthFormView, AuthService} from './auth.service';
import {FormGroup} from '@angular/forms';


@Component({
  selector: 'b-authentication',
  template: `
      <form [formGroup]="form" (ngSubmit)="onFormSubmit()">
        <h2 class="b-normal-font">User {{formName}}</h2>
        <router-outlet></router-outlet>
        <div class="f-actions">
          <button type="submit">{{formName}}</button>
          <button type="button" (click)="onCancelClick()">Cancel</button>
        </div>
        <div class="navigation" [ngSwitch]="formName">
          <ng-template [ngSwitchCase]="formNames.Login">
            <a [routerLink]="['user-create']">
              Don't have an account? Create one
            </a>
          </ng-template>
          <ng-template [ngSwitchCase]="formNames.Create">
            <a [routerLink]="['user-login']">
              Already have an account? Please login
            </a>
          </ng-template>
        </div>
      </form>
  `,
  styles: [`
    :host {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
    form {
      width: 500px;
    }
    .navigation {
      display: flex;
      justify-content: flex-end;
      padding: 25px 0;
    }
  `]
})
export class AuthComponent implements OnInit, AuthFormView {
  formName: AuthFormNames;
  form: FormGroup = new FormGroup({});

  formNames = AUTH_FORM_NAMES;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    // this.auth.user
    //     .read()
    //     .pipe(switchMap(
    //         res => res ? new Observable<AuthFormView>(null) : this.auth.formComponent
    //         ))
    //     .subscribe(
    //     value => value ? this.formName = value.formName : null
    // );
    this.auth.formComponent.subscribe(
        value => value ? this.formName = value.formName : null
    );
  }

  onFormSubmit() {
    if (this.formName === AUTH_FORM_NAMES.Login) {
      this.auth.userLogin().subscribe();
    }
    if (this.formName === AUTH_FORM_NAMES.Create) {
      this.auth.userCreate().subscribe();
    }
  }

  onCancelClick() {
    this.auth.navigateHome().then();
  }
}
