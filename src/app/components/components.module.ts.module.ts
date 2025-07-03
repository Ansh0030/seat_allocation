import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [TableComponent]
})
export class ComponentsModule { }
