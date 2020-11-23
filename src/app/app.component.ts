import { Component,OnInit } from '@angular/core';
import { TokenService } from './services/token.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[];
  isLoggedIn = false;
  showUserBoard = false;
  username: string;

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenService.getUser();
      this.roles = user.roles;

      this.showUserBoard = this.roles.includes('ROLE_USER');
      

      this.username = user.username;
    }
  }

  logout() {
    this.tokenService.signOut();
    window.location.reload();
  }
}


