import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = [
    { id: 1, firstName: 'aayush', lastName: 'viswase', phone: '9503446090', last_login: '-', role: 'User' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', phone: '987-654-3210', last_login: '-', role: 'Admin' },
    { id: 1, firstName: 'aayush', lastName: 'viswase', phone: '9503446090', last_login: '-', role: 'User' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', phone: '987-654-3210', last_login: '-', role: 'Admin' },
    
  ];
  editUser(user: any) {
    // Implement edit user functionality here
    console.log('Edit user:', user);
  }

  deleteUser(user: any) {
    // Implement delete user functionality here
    console.log('Delete user:', user);
  }

  constructor() { }

  ngOnInit(): void {
  }
}
