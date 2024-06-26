import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: UserForAuth | undefined;
  USER_KEY = '[user]';
  static isLogged: boolean = AuthService.isAthenticated();

  constructor() {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
    }
  }
  static isLogedIn(): boolean{
    return AuthService.isAthenticated();
  }
  login() {
    this.user = {
      id: '5fa64ca72183ce1728ff3726',
      firstName: 'Petko',
      email: 'petkoivanov@abv.bg',
      password: '123123',
      phoneNumber: '123-123-123-213',
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}