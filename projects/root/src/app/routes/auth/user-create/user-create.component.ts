import { Component, OnInit } from '@angular/core';
import {AUTH_FORM_NAMES, AuthFormView, AuthService} from '../auth.service';
import {FormControl, FormGroup} from '@angular/forms';
import {BFormControls} from '../../../utils/b-utils';
import {UserCreateModel} from '../../../services/api/models/user';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'b-user-create',
  template: `
    <label>
      Email
      <input type="text" [formControl]="fcEmail">
      <b-form-error [errorResponse]="responseError" fieldName="Email"></b-form-error>
    </label>
    <label>
      Phone number
      <input type="text" [formControl]="fcPhoneNumber">
    </label>
    <label>
      Password
      <input type="password" [formControl]="fcPassword" autocomplete="off">
      <b-form-error [errorResponse]="responseError" fieldName="Password"></b-form-error>
    </label>
  `,
  styles: [
  ]
})
export class UserCreateComponent implements OnInit, AuthFormView {

  responseError: HttpErrorResponse;

  formName = AUTH_FORM_NAMES.Create;
  form: FormGroup;

  fcEmail = new FormControl();
  fcPassword = new FormControl();
  fcPhoneNumber = new FormControl();

  constructor(private auth: AuthService) {
    this.auth.$formComponent.next(this);
  }

  ngOnInit(): void {
    const formControls: BFormControls<UserCreateModel> = {
      email: this.fcEmail,
      password: this.fcPassword,
      phoneNumber: this.fcPhoneNumber,
    };

    this.form = new FormGroup(formControls);

    this.auth.app.user.$httpError.subscribe(res => this.responseError = res);
  }

}
