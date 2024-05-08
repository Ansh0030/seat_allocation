import { Component,OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import Swiper from 'swiper';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  menus: any[] = new Array(10);

  
  ngAfterViewInit() {
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal', // or 'vertical'

    loop: true, // Enable loop mode

    // If you want pagination
    pagination: {
      el: '.swiper-pagination', // Element to display pagination
      clickable: true, // Enable clickable pagination
    },

    // If you want navigation arrows
    navigation:    {
      nextEl: '.swiper-button-next', // Element to display next button
      prevEl: '.swiper-button-prev', // Element to display previous button
    },

    // If you want autoplay
    // autoplay: {
    //   delay: 5000, // Autoplay interval in milliseconds
    //   disableOnInteraction: false, // Disable autoplay when user interacts with Swiper
    // },
  });
  }

  chipValues: string[] = [
    "All",
    "Ionic",
    "Gaming",
    "Music",
    "Cars",
    "GTA V",
    "America",
    "India",
    "Bikes",
    "Television"
  ];
  
}