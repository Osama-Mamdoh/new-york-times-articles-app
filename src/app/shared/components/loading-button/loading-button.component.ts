import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-button',
  templateUrl: './loading-button.component.html',
  styleUrls: ['./loading-button.component.scss'],
})
export class LoadingButtonComponent {
  @Input() text: string;
  @Input() type: string;
  @Input() loading: boolean;
  @Input() disabled: boolean;

  constructor() {}
}
