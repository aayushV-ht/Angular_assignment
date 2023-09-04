import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = []; // Initialize as an empty array

  editUser(user: any) {
    // Implement edit user functionality here
    console.log('Edit user:', user);
  }

  deleteUser(user: any) {
    // Implement delete user functionality here
    console.log('Delete user:', user);
    alert('The user has been deleted successfully');
    // Find the user in the users array and remove it
    const userIndex = this.users.findIndex(u => u.id === user.id);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
      // Update localStorage to remove the user
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }

  constructor() { }

  ngOnInit(): void {
    // Retrieve users from localStorage during component initialization
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }
}
