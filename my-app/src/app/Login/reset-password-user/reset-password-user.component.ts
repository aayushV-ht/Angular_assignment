import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-password-user',
  templateUrl: './reset-password-user.component.html',
  styleUrls: ['./reset-password-user.component.css'],
})
export class ResetPasswordUserComponent {
  newPassword = '';
  confirmNewPassword = '';
  resetSuccess = false;

  resetPassword() {
    if (this.newPassword === this.confirmNewPassword) {
      // Ensure that the value retrieved from local storage is a string
      const storedUserString = localStorage.getItem('user') as string;

      if (storedUserString) {
        const user = JSON.parse(storedUserString);
        user.password = this.newPassword;
        
        // Update the password in local storage
        localStorage.setItem('user', JSON.stringify(user));
        
        this.resetSuccess = true;
      } else {
        // Handle the case when 'user' is not found in local storage.
      }
    }
  }
}
