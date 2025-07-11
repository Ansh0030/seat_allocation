import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  activeTab = 'login';
  isSearchActive = false;
  isLogin !: boolean;

  constructor(
    private router: Router,
    private authService: AuthServiceService
  ) { }

  ngOnInit() {
    this.authService.loggedIn$.subscribe((isLoggedIn) => {
      this.isLogin = isLoggedIn;
      console.log(isLoggedIn);

      if (isLoggedIn) {
        this.router.navigate(['/tab1']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  logout() {
    this.authService.setLoggedIn(false);
  }

  switchtab(tab: string) {
    this.activeTab = tab;
    this.router.navigate([`/${tab}`]);
  }

  onClick(tab: string) {
    this.switchtab(tab);
  }

  searchClicked(e: boolean) {
    this.isSearchActive = e;
  }
}