import { Component } from '@angular/core';
import usersData from './users.json';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface IUser {
  id: number;
  username: string;
  password: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  image: string;
  address: { address: string; city: string; country: string };
  role: string;
}

// interface Chip {
//   text: string;
//   color: string;
// }

@Component({
  selector: 'app-users-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  standalone: true,
})
export class UsersListComponent {
  users: IUser[] = usersData; // Access as an objectsearchTerm = '';
  filteredData = [...this.users]; // Start with the full list
  searchTerm = '';

  onSearch() {
    this.filteredData = this.users.filter(
      (item) =>
        item.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  constructor() {
    console.log(this.users);
  }
}