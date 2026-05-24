import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';

import { User } from '../../services/user';

import { Record } from '../../models/record.model';

import { User as UserModel } from '../../models/user.modeec';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})

export class Dashboard implements OnInit {

  records: Record[] = [];

  users: UserModel[] = [];

  loading = true;

  currentUser!: UserModel;

  constructor(
    private userService: User,
    private router: Router
  ) {}

  ngOnInit(): void {

    const userData =
      localStorage.getItem('currentUser');

    if (userData) {

      this.currentUser =
        JSON.parse(userData);

    } else {

      this.router.navigate(['/']);

      return;
    }

    this.loadRecords();

    if (this.currentUser.role === 'Admin') {

      this.loadUsers();
    }
  }

  loadRecords() {

    this.userService.getRecords()
      .subscribe((data: any) => {

        this.records = data;

        this.loading = false;
      });
  }

  loadUsers() {

    this.userService.getUsers()
      .subscribe((data: any) => {

        this.users = data;
      });
  }

  deleteUser(id: number) {

    console.log('Delete clicked:', id);

    this.userService.deleteUser(id)
      .subscribe({

        next: () => {

          this.users =
            this.users.filter(
              user => user.id !== id
            );

          console.log('User deleted');
        },

        error: (error) => {

          console.error(error);
        }

      });

  }
logout() {

  const confirmLogout =
    confirm(
      'Are you sure you want to logout?'
    );

  if (!confirmLogout) {

    return;
  }

  localStorage.removeItem(
    'currentUser'
  );

  this.router.navigate(['/']);
}

}