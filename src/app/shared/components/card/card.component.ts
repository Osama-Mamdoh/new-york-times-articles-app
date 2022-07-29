import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() data: {
    image: string;
    imageAlt: string;
    title: string;
    description: string;
    byline: string;
  };
  @Input() readMore: boolean;
  @Output() readMoreAction = new EventEmitter();

  readMoreClicked() {
    this.readMoreAction.emit();
  }
}
