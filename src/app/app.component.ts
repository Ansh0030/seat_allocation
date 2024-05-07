import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
 
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

}