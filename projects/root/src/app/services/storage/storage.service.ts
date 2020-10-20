import {Injectable} from '@angular/core';
import {StorageItem} from './models/storage-item';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    token: StorageItem = new StorageItem('b-token');
}
