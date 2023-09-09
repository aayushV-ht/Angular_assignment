import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordUserComponent } from './forgot-password-user.component';

describe('ForgotPasswordUserComponent', () => {
  let component: ForgotPasswordUserComponent;
  let fixture: ComponentFixture<ForgotPasswordUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotPasswordUserComponent]
    });
    fixture = TestBed.createComponent(ForgotPasswordUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
