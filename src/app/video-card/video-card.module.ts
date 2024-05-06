import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCardComponent } from './video-card.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [VideoCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [VideoCardComponent]
})
export class VideoModule { }
