import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  users = [
    { id: 1, name: 'Aayush', active: true, email: 'aayush@example.com' },
    { id: 2, name: 'omkar', active: false, email: 'omkar@example.com' },
    { id: 3, name: 'Aayush', active: true, email: 'aayush@example.com' },
    { id: 4, name: 'omkar', active: false, email: 'omkar@example.com' },
    { id: 1, name: 'Aayush', active: true, email: 'aayush@example.com' },
    { id: 2, name: 'omkar', active: false, email: 'omkar@example.com' },
    { id: 3, name: 'Aayush', active: true, email: 'aayush@example.com' },
    { id: 4, name: 'omkar', active: false, email: 'omkar@example.com' },
   
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
