import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DisplayValueComponent} from './display-value.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [DisplayValueComponent],
    exports: [DisplayValueComponent]
})
export class DisplayValueModule {}

