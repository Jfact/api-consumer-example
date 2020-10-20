import { Injectable } from '@angular/core';
import {AppService} from '../../app.service';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';


@Injectable()
export class AccountService implements CanActivate {

  get user() {
    return this.app.user;
  }

  constructor(
      private app: AppService,
      private route: ActivatedRoute,
      private router: Router
  ) {}

  logout() {
    this.app.token = null;
    this.router
        .navigate([''], {relativeTo: this.route})
        .then();
  }

  navigateBack() {
    return this.router
        .navigate(['account', 'user-details'], {relativeTo: this.route})
        .then();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      Observable<boolean | UrlTree> |
      Promise<boolean | UrlTree> |
      boolean | UrlTree {
    return this.app.token ? true : this.router.navigate(['']);
  }

}
