import { Component, OnInit } from '@angular/core';
import {AUTH_FORM_NAMES, AuthFormView, AuthService} from '../auth.service';
import {FormControl, FormGroup} from '@angular/forms';
import {BFormControls} from '../../../utils/b-utils';
import {UserLoginModel} from '../../../services/api/models/user';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'b-user-login',
  template: `
    <label>
      Email
      <input type="text" [formControl]="fcEmail">
      <b-form-error [errorResponse]="responseError" fieldName="Email"></b-form-error>
    </label>
    <label>
      Password
      <input type="password" [formControl]="fcPassword" autocomplete="off">
      <b-form-error [errorResponse]="responseError" fieldName="Password"></b-form-error>
    </label>
  `
})
export class UserLoginComponent implements OnInit, AuthFormView {

  responseError: HttpErrorResponse;

  formName = AUTH_FORM_NAMES.Login;
  form: FormGroup;

  fcEmail = new FormControl();
  fcPassword = new FormControl();

  constructor(private auth: AuthService) {
    this.auth.$formComponent.next(this);
  }

  ngOnInit(): void {
    const formControls: BFormControls<UserLoginModel> = {
      email: this.fcEmail,
      password: this.fcPassword
    };

    this.form = new FormGroup(formControls);

    this.auth.app.user.$httpError.subscribe(res => this.responseError = res);
  }

}
