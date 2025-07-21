import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';



// import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, StoreModule.forRoot({}, {})
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideAnimationsAsync('noop')],
  bootstrap: [AppComponent],
})
export class AppModule { }
