import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthServiceService } from './service/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  activeTab = 'tab1';
  isSearchActive = false;
  isLogin !: boolean;

  constructor(
    private router: Router,
    private authService: AuthServiceService,
    private alertController: AlertController
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

  async logout() {
    const alert = await this.alertController.create({
      header: 'Do you want to logout?',
      mode: 'ios',
      cssClass: 'glass-alert',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'OK',
          handler: () => {
            this.authService.setLoggedIn(false);
          }
        }
      ]
    });
    await alert.present();

  }

  switchtab(tab: string) {
    this.activeTab = tab;
    this.router.navigate([`/${tab}`]);
  }

  onClick() {
    if (!!this.isLogin) {
      this.router.navigate(['/tab1']);
    } else {
      this.router.navigate(['/login'])
    }
  }

  searchClicked(e: boolean) {
    this.isSearchActive = e;
  }
}