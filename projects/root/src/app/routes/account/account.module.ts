import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {AccountService} from './account.service';
import {UserDetailsComponent} from './user-details/user-details.component';
import {UserEditComponent} from './user-edit/user-edit.component';
import {FormErrorModule} from '../../components/form-error/form-error.module';
import {DisplayValueModule} from '../../components/display-value/display-value.module';
import {DirectivesModule} from '../../directives/directives.module';


const Routes: Routes = [
    {
        path: '',
        component: AccountComponent,
        canActivate: [AccountService],
        children: [
            {path: '', redirectTo: 'user-details', pathMatch: 'full'},
            {path: 'user-details', component: UserDetailsComponent},
            {path: 'user-edit', component: UserEditComponent}
        ]}
];

@NgModule({
    declarations: [AccountComponent, UserDetailsComponent, UserEditComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormErrorModule,
        DisplayValueModule,
        DirectivesModule,
        RouterModule.forChild(Routes)
    ],
    providers: [AccountService]
})
export class AccountModule { }
