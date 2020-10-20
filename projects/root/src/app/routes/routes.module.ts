import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const Routes: Routes = [
  {path: '', loadChildren: () => import(`./home/home.module`).then(m => m.HomeModule)},
  {path: 'auth', loadChildren: () => import(`./auth/auth.module`).then(m => m.AuthModule)},
  {path: 'account', loadChildren: () => import(`./account/account.module`).then(m => m.AccountModule)},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(Routes)
  ],
  exports: [RouterModule],
})
export class RoutesModule { }
