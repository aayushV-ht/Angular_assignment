import { Component ,OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  users: any[] = [];
  ActiveUser: any[] = [];
  InActiveUser: any[]=[];
  totalUsers: number = 0;
  activeUsers: number = 0;
  inactiveUsers: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) { }



  ngOnInit(): void {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
      this.ActiveUser = this.users;
      this.InActiveUser = this.users;
      this.totalUsers = this.users.length;

      this.ActiveUser = this.ActiveUser.filter(user => user.active);
      this.activeUsers = this.ActiveUser.length;


      this.InActiveUser = this.InActiveUser.filter(user => !user.active);
      this.inactiveUsers = this.InActiveUser.length;


    }
  }
  handleClick(){
    this.router.navigate(['/user-list']);
  }
}


