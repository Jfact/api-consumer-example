import {ComponentFactoryResolver, Directive, ViewContainerRef} from '@angular/core';
import {PasswordDisplayButtonComponent} from '../../components/password-display-button/password-display-button.component';

@Directive({
  selector: '[bPassword],input[type=password]'
})
export class PasswordInputDirective {
  constructor(viewContainer: ViewContainerRef, factoryResolver: ComponentFactoryResolver) {
    const factory = factoryResolver.resolveComponentFactory(PasswordDisplayButtonComponent);
    const component = factory.create(viewContainer.injector);
    viewContainer.insert(component.hostView);
  }
}

