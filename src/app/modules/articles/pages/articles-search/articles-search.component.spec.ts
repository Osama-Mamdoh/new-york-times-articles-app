import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticlesSearchComponent } from './articles-search.component';
import { TestingModule } from 'src/app/testing/testing.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';

describe('ArticlesSearchComponent', () => {
  let component: ArticlesSearchComponent;
  let fixture: ComponentFixture<ArticlesSearchComponent>;
  let store;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticlesSearchComponent],
      imports: [TestingModule, StoreModule.forRoot({})],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    store = TestBed.get(Store);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call get Articles method with ngOnInit', () => {
    spyOn(component, 'getArticles');
    component.ngOnInit();
    expect(component.getArticles).toHaveBeenCalledWith();
  });

  it('should change pageSize value', () => {
    spyOn(component, 'getArticles');
    component.onPageChange(2);
    expect(component.currentPage).toEqual(2);
    expect(component.getArticles).toHaveBeenCalledWith();
  });

  it('should call get Articles method with getArticles', () => {
    spyOn(component, 'getArticles');
    component.searchForArticles();
    expect(component.currentPage).toEqual(1);
    expect(component.getArticles).toHaveBeenCalledWith();
  });
});
