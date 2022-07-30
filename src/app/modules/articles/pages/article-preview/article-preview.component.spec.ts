import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticlePreviewComponent } from './article-preview.component';
import { TestingModule } from 'src/app/testing/testing.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { articleMock } from 'src/app/testing/mocks/article.mock';

describe('ArticlePreviewComponent', () => {
  let component: ArticlePreviewComponent;
  let fixture: ComponentFixture<ArticlePreviewComponent>;
  let mockRouter;

  beforeEach(async () => {
    mockRouter = {
      getCurrentNavigation: () => {
        return {
          extras: {
            state: null,
          },
        };
      },
      navigate: jasmine.createSpy('navigate'),
    };

    await TestBed.configureTestingModule({
      declarations: [ArticlePreviewComponent],
      imports: [TestingModule],
      providers: [{ provide: Router, useValue: mockRouter }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlePreviewComponent);
    component = fixture.componentInstance;
    component.article = articleMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
