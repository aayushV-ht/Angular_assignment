import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isUserLoggedIn = true;/* Implement logic to check if the user is logged in */;

    if (isUserLoggedIn) {
      return true;
    } else {
      // Redirect to the signup page if not logged in
      this.router.navigate(['/signup']);
      return false;
    }
  }
}
