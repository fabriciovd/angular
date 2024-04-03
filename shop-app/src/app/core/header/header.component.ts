import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { UserService } from 'src/app/user/user.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isLoggedin: boolean = AuthService.isLogedIn();
  
  constructor(private router: Router) { 
    
  }
  ngOnInit(): void {

    this.isLoggedin = AuthService.isLogedIn();
    
  }

  logout() {
    AuthService.logout();
    this.isLoggedin = AuthService.isLogedIn();
    this.router.navigate(['/home']);
  }
 
}
