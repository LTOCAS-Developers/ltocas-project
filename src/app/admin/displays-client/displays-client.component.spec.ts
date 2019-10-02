import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaysClientComponent } from './displays-client.component';

describe('DisplaysEmployeeComponent', () => {
  let component: DisplaysClientComponent;
  let fixture: ComponentFixture<DisplaysClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaysClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaysClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
