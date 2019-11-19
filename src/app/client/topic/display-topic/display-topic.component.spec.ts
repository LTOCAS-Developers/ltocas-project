import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTopicComponent } from './display-topic.component';

describe('DisplayTopicComponent', () => {
  let component: DisplayTopicComponent;
  let fixture: ComponentFixture<DisplayTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
