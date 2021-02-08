import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.class';

@Injectable({
  providedIn: 'root',
})

export class SystemService {
  loggedInUser: User = null;

  constructor(private router: Router) {}

  isAdmin(): boolean {
    return (this.loggedInUser ==null) ? false :this.loggedInUser.admin;
  }

  checklogin(): void {
    if (this.loggedInUser == null) {
      this.router.navigateByUrl('/user-login');
    }
  }
}