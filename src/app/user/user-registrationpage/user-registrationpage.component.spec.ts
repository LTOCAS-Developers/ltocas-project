import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistrationpageComponent } from './user-registrationpage.component';

describe('UserRegistrationpageComponent', () => {
  let component: UserRegistrationpageComponent;
  let fixture: ComponentFixture<UserRegistrationpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRegistrationpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
