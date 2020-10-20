import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {StorageService} from '../storage/storage.service';
import {Observable} from 'rxjs';
import {retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements HttpInterceptor {
  readonly  url = 'https://localhost:44388/api';

  constructor(
      public http: HttpClient,
      private storage: StorageService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.storage.token.content;

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request).pipe(retry((1)));
  }
}
