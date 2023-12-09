import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';

@NgModule({
  declarations: [ SearchComponent ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      { path: '', component: SearchComponent },
    ])
  ],
  exports: [ SearchComponent ]
})
export class SearchModule { }
