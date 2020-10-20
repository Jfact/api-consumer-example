import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import {RouterModule, Routes} from '@angular/router';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserLoginComponent } from './user-login/user-login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './auth.service';
import {FormErrorModule} from '../../components/form-error/form-error.module';
import {DirectivesModule} from '../../directives/directives.module';

const Routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    canActivate: [AuthService],
    children: [
      {path: '', redirectTo: 'user-login', pathMatch: 'full'},
      {path: 'user-login', component: UserLoginComponent},
      {path: 'user-create', component: UserCreateComponent},
    ]
  }
];

@NgModule({
  declarations: [AuthComponent, UserCreateComponent, UserLoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormErrorModule,
    DirectivesModule,
    RouterModule.forChild(Routes),
  ],
  providers: [AuthService]
})
export class AuthModule { }
