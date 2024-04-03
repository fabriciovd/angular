import { Injectable, OnChanges, SimpleChanges } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  static isLogedIn(): boolean {
   return this.isAthenticated();
  }

  static isAthenticated(): boolean{
    return localStorage.length  >0  ? true : false;
  }
 static logout(): void {
    localStorage.clear();
    
  }
  constructor() { }
}
