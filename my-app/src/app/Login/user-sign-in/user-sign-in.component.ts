import { Component } from '@angular/core';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css'],
})
export class UserSignInComponent {
  loginUserEmail = '';
  loginUserPassword = '';
  loginError = false;

  loginUser() {
    // Simulate a successful login for demonstration purposes
    if (this.loginUserEmail === 'example@email.com' && this.loginUserPassword === 'password') {
      this.loginError = false;
      console.log('Login successful');
    } else {
      this.loginError = true;
      console.log('Invalid login');
    }
  }
}
