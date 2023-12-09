import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';import { TabsRoutingModule } from './tabs-routing.module';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './tabs.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [TabsComponent, FooterComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot({}),
    TabsRoutingModule
  ],
  bootstrap: [TabsComponent]
})
export class TabsModule { }