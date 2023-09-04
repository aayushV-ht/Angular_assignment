import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  confirmDelete(): void {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      const users: any[] = JSON.parse(storedUsers);

      const userIndex = users.findIndex(u => u.id === this.data.id);
      if (userIndex !== -1) {
        users.splice(userIndex, 1);

        localStorage.setItem('users', JSON.stringify(users));

        console.log('User Deleted:', this.data);

        this.dialogRef.close('confirm');
      } else {
        console.error('User not found:', this.data);
        this.dialogRef.close(); 
      }
    }
  }

  cancelDelete(): void {
    this.dialogRef.close();
  }
}
