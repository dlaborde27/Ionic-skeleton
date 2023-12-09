import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { LibraryComponent } from './library.component';



@NgModule({
  declarations: [ LibraryComponent ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      { path: '', component: LibraryComponent },
    ])
  ],
  exports: [ LibraryComponent ]
})
export class LibraryModule { }
