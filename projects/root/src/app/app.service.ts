import { Injectable } from '@angular/core';
import {ApiService} from './services/api/api.service';
import {UserControllerModel} from './services/api/models/user';
import {StorageService} from './services/storage/storage.service';

@Injectable({providedIn: 'root'})
export  class AppService {
    user: UserControllerModel;

    get token() {
        return this.storage.token.content;
    }

    set token(value) {
        this.storage.token.content = value;
    }

    constructor(api: ApiService, private storage: StorageService) {
        this.user = new UserControllerModel(api, storage);
    }
}

