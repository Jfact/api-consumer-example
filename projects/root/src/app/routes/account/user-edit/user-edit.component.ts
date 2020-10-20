import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BFormControls} from '../../../utils/b-utils';
import {UserEditModel} from '../../../services/api/models/user';
import {AccountService} from '../account.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'b-user-edit',
  template: `
    <form [formGroup]="form" (ngSubmit)="onFormSubmit()">
      <h2 class="b-normal-font">Edit User Details</h2>
      <label>
        Email
        <input type="text" [formControl]="fcEmail">
        <b-form-error [errorResponse]="errorResponse" fieldName="InvalidEmail"></b-form-error>
        <b-form-error [errorResponse]="errorResponse" fieldName="InvalidUserName"></b-form-error>
      </label>
      <label>
        Phone number
        <input type="text" [formControl]="fcPhoneNumber">
      </label>
      <label>
        First name
        <input type="text" [formControl]="fcFirstName">
      </label>
      <label>
        Last name
        <input type="text" [formControl]="fcLastName">
      </label>
      <label>
        Password
        <input type="password" [formControl]="fcPassword" autocomplete="off">
      </label>
      <label>
        Current password for validation
        <input type="password" [formControl]="fcPasswordForValidation" autocomplete="off">
        <b-form-error [errorResponse]="errorResponse" fieldName="PasswordForValidation"></b-form-error>
      </label>
      <div class="f-actions">
        <button type="submit">Save</button>
        <button type="button" (click)="onCancelClick()">Cancel</button>
      </div>
    </form>
  `
})
export class UserEditComponent implements OnInit {

  form: FormGroup;

  fcEmail = new FormControl();
  fcPassword = new FormControl();
  fcFirstName = new FormControl();
  fcLastName = new FormControl();
  fcPhoneNumber = new FormControl();
  fcPasswordForValidation = new FormControl();

  errorResponse: HttpErrorResponse;

  constructor(private account: AccountService) { }

  ngOnInit(): void {

    const formControls: BFormControls<UserEditModel> = {
      email: this.fcEmail,
      password: this.fcPassword,
      firstName: this.fcFirstName,
      lastName: this.fcLastName,
      phoneNumber: this.fcPhoneNumber,
      passwordForValidation: this.fcPasswordForValidation,
    };

    this.form = new FormGroup(formControls);

    this.account.user.read().subscribe(res => this.form.patchValue(res));
    this.account.user.$httpError.subscribe(res => this.errorResponse = res);
  }

  onFormSubmit() {
    this.account.user.edit(this.form.value).subscribe(() => this.account.navigateBack());
  }

  onCancelClick() {
    this.account.navigateBack().then();
  }
}
