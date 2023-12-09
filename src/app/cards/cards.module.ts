import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [CardsComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      { path: '', component: CardsComponent },
    ])
  ],
  exports: [CardsComponent]
})
export class CardsModule { }