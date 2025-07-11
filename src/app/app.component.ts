import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  activeTab = 'login';
  isSearchActive = false;
  isLogin: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/login']);
  }


  // switchtab(tab: string) {
  //   this.activeTab = tab;
  //   this.router.navigate([`/${tab}`]);
  // }

  // onClick(tab: string) {
  //   this.switchtab(tab);
  // }

  // searchClicked(e: boolean) {
  //   this.isSearchActive = e;
  // }
}