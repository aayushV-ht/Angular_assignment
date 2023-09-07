import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  searchQuery: string = '';

  currentPage: number = 1;
  recordsPerPage: number = 10;
  itemsPerPageOptions: number[] = [10, 20];
  totalRecords: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
      this.filteredUsers = this.users;
      this.totalRecords = this.users.length;
    }
  }

  editUser(user: any): void {
    this.router.navigate(['/edit-user', { userToEdit: JSON.stringify({ ...user }) }]);
  }

  deleteUser(user: any): void {
    this.router.navigate(['/delete-user', { userToDelete: JSON.stringify(user) }]);
  }
  //Searching filter++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  onSearch(): void {
    this.filteredUsers = this.users.filter((user) =>
      this.matchesSearchQuery(user, this.searchQuery)
    );
  }

  private matchesSearchQuery(user: any, query: string): boolean {
    const lowerCaseQuery = query.toLowerCase();
    return (
      user.firstName.toLowerCase().includes(lowerCaseQuery) ||
      user.lastName.toLowerCase().includes(lowerCaseQuery) ||
      user.email.toLowerCase().includes(lowerCaseQuery) ||
      user.role.toLowerCase().includes(lowerCaseQuery) ||
      user.phone.includes(lowerCaseQuery)
    );
  }
  //Pagination++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  onPageChange(page: number): void {
    this.currentPage = page;
    this.updateFilteredUsers();
  }

  onItemsPerPageChange(value: number): void {
    this.recordsPerPage = value;
    this.currentPage = 1;
    this.updateFilteredUsers();
  }

  private updateFilteredUsers(): void {
    const startIndex = (this.currentPage - 1) * this.recordsPerPage;
    const endIndex = Math.min(startIndex + this.recordsPerPage, this.totalRecords);
    this.filteredUsers = this.users.slice(startIndex, endIndex);


  }
  //Sorting++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  onSortChange(sortOption: string): void {
    if (sortOption === 'asc') {
      this.filteredUsers.sort((a, b) => (a.firstName > b.firstName ? 1 : -1));
    } else if (sortOption === 'desc') {
      this.filteredUsers.sort((a, b) => (a.firstName < b.firstName ? 1 : -1));
    } else if (sortOption === 'createdDate') {
      this.filteredUsers.sort((a, b) => {


        const dateA = new Date(a.createdDate);
        const dateB = new Date(b.createdDate);
        // console.log(a.firstName);
        // console.log(typeof (dateA));
        // console.log(dateA);

        if (dateA === dateB) {
          return 0;
        } else if (dateA < dateB) {
          return -1;
        } else {
          return 1;
        }
      });
    } else if (sortOption === 'lastUpdated') {
      this.filteredUsers.sort((a, b) => {

        const timestamp1 = Date.parse(a.lastUpdated);
        const lastdateA = new Date(timestamp1);

        const timestamp2 = Date.parse(b.lastUpdated);
        const lastdateB = new Date(timestamp2);

        if (lastdateA === lastdateB) {
          return 0;
        } else if (lastdateA < lastdateB) {
          return -1;
        } else {
          return 1;
        }
      });
    }
  }
  //Filter++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  onFilterChange(filterOption: string) {
    if (filterOption === 'all') {
      this.filteredUsers = this.users.filter((user) =>
        this.matchesRoleQuery(user, '')
      );
    } else {
      this.filteredUsers = this.users.filter((user) =>
        this.matchesRoleQuery(user, filterOption)
      );
    }
  }
  private matchesRoleQuery(user: any, query: string): boolean {
    const lowerCaseQuery = query.toLowerCase();
    return (

      user.role.toLowerCase().includes(lowerCaseQuery)

    );
  }
}

