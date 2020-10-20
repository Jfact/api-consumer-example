import {Component, Input, OnInit} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'b-form-error',
  template: `
    <ng-container *ngIf="errorResponse && errorResponse.error[fieldName]">
      <p class="error" *ngFor="let error of errorResponse.error[fieldName]">
        {{error}}
      </p>
    </ng-container>
  `,
  styles: [`
    .error {
      font-size: smaller;
      padding: 4px 0;
      margin: 0;
      color: #ec2121;
    }
  `]
})
export class FormErrorComponent implements OnInit {
  @Input() errorResponse: HttpErrorResponse;
  @Input() fieldName: string;

  constructor() { }

  ngOnInit(): void {}
}
