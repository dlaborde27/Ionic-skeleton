import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ItemsComponent } from './items.component';

@NgModule({
  declarations: [ItemsComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      { path: '', component: ItemsComponent },
    ])
  ]
})
export class ItemsModule { }