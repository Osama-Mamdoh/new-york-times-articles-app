import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { TestingModule } from 'src/app/testing/testing.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { cardDataMock } from 'src/app/testing/mocks/card.mock';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports: [TestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.data = cardDataMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit output event', () => {
    spyOn(component.readMoreAction, 'emit');
    component.readMoreClicked();
    expect(component.readMoreAction.emit).toHaveBeenCalledWith();
  });
});
