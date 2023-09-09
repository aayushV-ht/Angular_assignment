import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password-user',
  templateUrl: './forgot-password-user.component.html',
  styleUrls: ['./forgot-password-user.component.css'],
})
export class ForgotPasswordUserComponent {
  constructor(private router:Router){}
  recoveryEmail = '';
  recoverySuccess = false;

  recoverPassword() {
    this.router.navigate(['/reset-password']);
    this.recoverySuccess = true;
  }
}
