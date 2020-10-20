import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'b-password-display-button',
  template: `<a (click)="onButtonClick()" type="button"><i class="far fa-eye"></i></a>`,
  styles: [`
    :host {
      position: absolute;
      top: 2px;
      right: 5px;
    }
    a {
      font-size: larger;
      color: #b9b9b9;
    }
    a:hover {
      cursor: pointer;
      color: #9b9b9b;
    }
  `]
})
export class PasswordDisplayButtonComponent implements OnInit {

  container: HTMLElement;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.container = this.el.nativeElement.parentElement;
    this.container.style.position = 'relative';
  }

  onButtonClick() {
    const inputs: NodeListOf<HTMLInputElement>
        = this.container.querySelectorAll('input[type="password"],input[type="text"]');

    inputs.forEach(el => {
      const type = el.type;
      el.type = type === 'text' ? 'password' : 'text';
    });
  }

}
