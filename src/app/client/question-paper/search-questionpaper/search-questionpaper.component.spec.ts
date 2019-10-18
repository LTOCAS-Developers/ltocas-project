import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchQuestionpaperComponent } from './search-questionpaper.component';

describe('SearchQuestionpaperComponent', () => {
  let component: SearchQuestionpaperComponent;
  let fixture: ComponentFixture<SearchQuestionpaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchQuestionpaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchQuestionpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
