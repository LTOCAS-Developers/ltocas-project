import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginpageComponent } from './user-loginpage.component';

describe('UserLoginpageComponent', () => {
  let component: UserLoginpageComponent;
  let fixture: ComponentFixture<UserLoginpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLoginpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
