import {NgModule} from '@angular/core';
import {FormErrorComponent} from './form-error.component';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [FormErrorComponent],
    exports: [FormErrorComponent]
})
export class FormErrorModule {}

