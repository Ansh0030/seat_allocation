import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(
    private router: Router,
    private authService: AuthServiceService
  ) { }

  login() {
    this.authService.setLoggedIn(true);
  }

}
