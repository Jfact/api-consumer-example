import { Injectable } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {BehaviorSubject, Observable} from 'rxjs';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AppService} from '../../app.service';
import {delay, tap} from 'rxjs/operators';

export interface AuthFormView {
  formName: AuthFormNames;
  form: FormGroup;
}

export const AUTH_FORM_NAMES = {
  Login: 'Login',
  Create: 'Create'
} as const;

export type AuthFormNames = (typeof AUTH_FORM_NAMES) [keyof typeof AUTH_FORM_NAMES];

@Injectable()
export class AuthService implements CanActivate, AuthFormView {

  formName: AuthFormNames;
  form: FormGroup;

  $formComponent: BehaviorSubject<AuthFormView> = new BehaviorSubject(null);

  get formComponent() {
    return this.$formComponent.pipe(
        delay(0),
        tap(value => value ? this.init() : null));
  }

  constructor(
      public app: AppService,
      private route: ActivatedRoute,
      private router: Router
  ) {}

  init() {
    this.form = this.$formComponent.value.form;
    this.formName = this.$formComponent.value.formName;
  }

  userLogin() {
    return this.app.user.login(this.form.value).pipe(
        tap(value => value ? this.navigateHome() : null)
    );
  }
  userCreate() {
    return this.app.user.login(this.form.value).pipe(
        tap(value => value ? this.router.navigate(['user-login'], {relativeTo: this.route}) : null)
    );
  }
  navigateHome() {
    return this.router
        .navigate([''], {relativeTo: this.route})
        .then();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      Observable<boolean | UrlTree> |
      Promise<boolean | UrlTree> |
      boolean | UrlTree {
    // console.log(this.app.token === null);
    return this.app.token ? this.navigateHome() : true;
  }
}
