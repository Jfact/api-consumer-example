import {NgModule} from '@angular/core';
import {PasswordInputDirective} from './input/password-input.directive';
import {PasswordDisplayButtonModule} from '../components/password-display-button/password-display-button.module';

@NgModule({
    imports: [PasswordDisplayButtonModule],
    declarations: [PasswordInputDirective],
    exports: [PasswordDisplayButtonModule, PasswordInputDirective]
})
export class DirectivesModule {}
