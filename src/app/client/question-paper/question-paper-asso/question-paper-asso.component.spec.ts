import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPaperAssoComponent } from './question-paper-asso.component';

describe('QuestionPaperAssoComponent', () => {
  let component: QuestionPaperAssoComponent;
  let fixture: ComponentFixture<QuestionPaperAssoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionPaperAssoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionPaperAssoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
