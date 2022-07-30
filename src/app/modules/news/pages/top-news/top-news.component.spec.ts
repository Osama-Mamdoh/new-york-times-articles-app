import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopNewsComponent } from './top-news.component';
import { TestingModule } from 'src/app/testing/testing.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TopNewsComponent', () => {
  let component: TopNewsComponent;
  let fixture: ComponentFixture<TopNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopNewsComponent],
      imports: [TestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call get News method with ngOnInit', () => {
    spyOn(component, 'getNews');
    component.ngOnInit();
    expect(component.getNews).toHaveBeenCalledWith();
  });

  it('should call get News method with selectCategory', () => {
    spyOn(component, 'getNews');
    component.selectCategory(0);
    expect(component.newsCategories[0].active).toBeTruthy();
    expect(component.getNews).toHaveBeenCalledWith();
  });

  it('should change pageSize value', () => {
    component.onPageChange(2);
    expect(component.pageSize).toEqual(6);
  });
});
