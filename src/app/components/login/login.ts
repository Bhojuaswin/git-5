import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,

  imports: [
    FormsModule,
    CommonModule
  ],

  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {

  username = '';

  password = '';

  role = 'General User';

  errorMessage = '';

  successMessage = '';

  loading = false;

  constructor(
    private authService: Auth,
    private router: Router
  ) {}

  login() {

    this.errorMessage = '';

    this.successMessage = '';

    this.loading = true;

    if (
      !this.username ||
      !this.password
    ) {

      this.loading = false;

      this.errorMessage =
        'Username and Password are required';

      return;
    }

    const data = {
      username: this.username,
      password: this.password,
      role: this.role
    };

    this.authService.login(data)
      .subscribe({

        next: (response: any) => {

          this.loading = false;

          this.errorMessage = '';

          this.successMessage =
            'Login Successful';

          localStorage.setItem(
            'currentUser',
            JSON.stringify(response)
          );

          this.router.navigate(['/dashboard']);
        },

        error: () => {

          this.loading = false;

          this.successMessage = '';

          this.errorMessage =
            'Invalid Username, Password or Role';
        }

      });
  }

}