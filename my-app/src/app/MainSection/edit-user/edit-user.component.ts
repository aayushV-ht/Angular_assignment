import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editedUser: any;

  constructor(
    public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editedUser = { ...data.userToEdit };
  }

  ngOnInit(): void {}

  onSubmit(): void {
    
    this.updateUserInLocalStorage(this.editedUser);

    this.dialogRef.close('updated');
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  private updateUserInLocalStorage(updatedUser: any): void {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');

    const userIndex = storedUsers.findIndex((user: any) => user.id === updatedUser.id);

    if (userIndex !== -1) {
      storedUsers[userIndex] = updatedUser;

      localStorage.setItem('users', JSON.stringify(storedUsers));
    }
  }
}
