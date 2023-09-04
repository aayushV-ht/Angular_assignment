import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {
  @Input() user: any;
  constructor(public activeModal: NgbActiveModal) {}

  confirmDelete() {
    // Implement delete user functionality here
    console.log('Delete user:', this.user);

    // Close the modal
    this.activeModal.close('Delete confirmed');
  }

  
}
