import {Component, Input} from '@angular/core';

@Component({
  selector: 'b-display-value',
  template: `
    <p>
      <strong>
        {{label}}
      </strong>
      <span class="line"></span>
      <ng-container *ngIf="value; else NoValueBlock">
        {{value}}
      </ng-container>
      <ng-template #NoValueBlock>
        Nonspecific
      </ng-template>
    </p>
  `,
  styles: [`
    p {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
    }
    p strong {
      display: flex;
      min-width: fit-content;
      font-weight: bolder;
    }
    .line {
      display: flex;
      width: 100%;
      height: 0;
      margin: 0 20px;
      border-top: 1px solid rgba(0,0,0, 0.1);
    }
  `]
})
export class DisplayValueComponent {
  @Input() value: string;
  @Input() label: string;
}
