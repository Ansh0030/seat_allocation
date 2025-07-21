import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [TableComponent]
})
export class ComponentsModule { }
