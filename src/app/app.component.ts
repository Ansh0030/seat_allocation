import { Component } from '@angular/core';
import { Tab1Page } from './tab1/tab1.page';
import {Router} from "@angular/router"

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) { }
 
  layout1: boolean = false;


  switchtab(value:string){
    if(value == 'tab3'){
      this.layout1 = true;
    }else{
      this.layout1 = false;
    }
  }

  isSearchActive: boolean = false;
  
  searchClicked(e: boolean){
   this.isSearchActive = e;
  }

  onClick() {
    this.router.navigate(['/tab1']) ; // Redirect to "/tab1"
}
}