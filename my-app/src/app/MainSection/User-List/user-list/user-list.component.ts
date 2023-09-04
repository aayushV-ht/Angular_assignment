import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserComponent } from '../../delete-user/delete-user.component';
import { EditUserComponent } from '../../edit-user/edit-user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }
  editUser(user: any): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '400px', // Set the desired width
      data: { userToEdit: { ...user } }, 
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'updated') {
        this.refreshUserList(); 
      }
    });
  }
  

  openDeleteUserDialog(user: any): void {
    const dialogRef = this.dialog.open(DeleteUserComponent, {
      width: 'fit-content' ,
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.refreshUserList();
        alert('The user has been deleted successfully');
      }
    });
  }

  private refreshUserList(): void {
   
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }
}
