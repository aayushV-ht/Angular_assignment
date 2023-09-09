import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  confirmPassword = '';
  registered = false;

  onSubmit() {
    // Check if the passwords match before storing the data
    if (this.user.password === this.confirmPassword) {
      // Store user data in local storage
      localStorage.setItem('user', JSON.stringify(this.user));
      this.registered = true;
    } else {
      // Passwords do not match, you can handle this case with user feedback
      // For simplicity, we'll just reset the form
      this.user = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      };
      this.confirmPassword = '';
      this.registered = false;
      alert('Passwords do not match. Please try again.');
    }
  }
}
