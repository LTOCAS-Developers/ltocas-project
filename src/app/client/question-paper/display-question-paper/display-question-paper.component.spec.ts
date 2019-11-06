import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayQuestionPaperComponent } from './display-question-paper.component';

describe('DisplayQuestionPaperComponent', () => {
  let component: DisplayQuestionPaperComponent;
  let fixture: ComponentFixture<DisplayQuestionPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayQuestionPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayQuestionPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
