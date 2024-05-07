import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  // selectedTab():boolean{
  //   if(){
  //     return true;
  //   }else{

  //   }
  
  selectedTab : string = 'tab1' || 'tab2' || 'tab3';

  click(value:string):{
    this.selectedTab = value;
}

}