import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RoutesModule} from './routes/routes.module';
import {ApiService} from './services/api/api.service';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RoutesModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiService,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
