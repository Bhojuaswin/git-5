import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class User {

  private apiUrl =
    'http://localhost:3000/api';

  constructor(
    private http: HttpClient
  ) {}

  getRecords() {

    return this.http.get(
      `${this.apiUrl}/records`
    );
  }

  getUsers() {

    return this.http.get(
      `${this.apiUrl}/users`
    );
  }

  deleteUser(id: number) {

    console.log('Deleting user:', id);

    return this.http.delete(
      `${this.apiUrl}/users/${id}`
    );
  }

}