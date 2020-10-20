import {BehaviorSubject, Observable} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {ApiService} from '../api.service';
import {StorageService} from '../../storage/storage.service';

export interface UserModel {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
}

export interface UserEditModel {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
    passwordForValidation: string;
}

export interface UserCreateModel {
    email: string;
    password: string;
    phoneNumber: string;
}

export interface UserLoginModel {
    email: string;
    password: string;
}

export interface UserTokenModel {
    token: string;
}

export class UserControllerModel {
    private  readonly  url = 'user';

    $value: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>(null);
    $httpError: BehaviorSubject<HttpErrorResponse> = new BehaviorSubject<HttpErrorResponse>(null);

    constructor(
        private api: ApiService,
        private storage: StorageService
    ) {}

    read() {
        return this.api.http
            .get<UserModel>(`${this.api.url}/${this.url}`)
            .pipe(tap(
                value => {
                    this.$value.next(value);
                    this.$httpError.next(null);
                    },
                error => this.$httpError.next(error)
            ));
    }
    edit(model: UserEditModel): Observable<void> {
        return this.api.http
            .put<void>(`${this.api.url}/${this.url}`, model)
            .pipe(tap(
                () => this.$httpError.next(null),
                error => this.$httpError.next(error)
            ));
    }
    create(model: UserCreateModel): Observable<void> {
        return this.api.http
            .post<void>(`${this.api.url}/${this.url}`, model)
            .pipe(tap(
                () => this.$httpError.next(null),
                error => this.$httpError.next(error)
            ));
    }
    login(model: UserLoginModel): Observable<UserTokenModel> {
        return this.api.http
            .post<UserTokenModel>(`${this.api.url}/login`, model)
            .pipe(tap(
                value => {
                    this.storage.token.content = value.token;
                    this.$httpError.next(null);
                    },
                error => this.$httpError.next(error)
            ));
    }
}
