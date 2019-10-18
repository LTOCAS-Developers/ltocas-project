import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQuestionpaperComponent } from './list-questionpaper.component';

describe('ListQuestionpaperComponent', () => {
  let component: ListQuestionpaperComponent;
  let fixture: ComponentFixture<ListQuestionpaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListQuestionpaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListQuestionpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
