import { Component,  } from '@angular/core';
import { AuthGuard } from '../auth.guard';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private route: ActivatedRoute, private router: Router) { }
  signup(): void {
    // Perform signup logic here
    // ...
  
    // After successful signup, set the user as logged in
    
  
    // Redirect to the dashboard or another component
    this.router.navigate(['/dashboard']);
  }
  
}
