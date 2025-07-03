import { Component } from '@angular/core';
import { Tab1Page } from './tab1/tab1.page';
import { Router } from "@angular/router"

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {
    this.onClick('tab1');
  }

  layout1: boolean = false;

  activeTab = 'tab1';

  switchtab(tab: string) {
    this.activeTab = tab;
    this.router.navigate([`/${tab}`]);
  }

  isSearchActive: boolean = false;

  searchClicked(e: boolean) {
    this.isSearchActive = e;
  }

  onClick(tab: String) {
    this.switchtab('tab1');
  }
}