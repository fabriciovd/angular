import { Component, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  
    constructor(private router: Router, private userService: UserService) {
      
     }

      login() {
        this.userService.login();
        this.router.navigate(['/home']);
      }
}
