import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CardData } from '@core/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() data: CardData;
  @Input() readMore: boolean;
  @Output() readMoreAction = new EventEmitter();

  readMoreClicked() {
    this.readMoreAction.emit();
  }
}
