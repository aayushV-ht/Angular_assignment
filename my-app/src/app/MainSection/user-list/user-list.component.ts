import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }
  editUser(user: any): void {
  
    this.router.navigate(['/edit-user', { userToEdit: JSON.stringify({ ...user }) }]);
  }
  

  DeleteUser(user: any): void {
    this.router.navigate(['/delete-user', { userToDelete: JSON.stringify(user) }]);
  }
}