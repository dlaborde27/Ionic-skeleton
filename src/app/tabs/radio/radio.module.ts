import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { RadioComponent } from './radio.component';

@NgModule({
  declarations: [ RadioComponent ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      { path: '', component: RadioComponent },
    ])
  ],
  exports: [ RadioComponent ]
})
export class RadioModule { }
