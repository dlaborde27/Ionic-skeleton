import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Cards',
    pathMatch: 'full'
  },
  {
    path: 'Modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalModule)
  },
  {
    path: 'Tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsModule)
  },
  {
    path: 'Cards',
    loadChildren: () => import('./cards/cards.module').then( m => m.CardsModule)
  },
  {
    path: 'Items',
    loadChildren: () => import('./items/items.module').then( m => m.ItemsModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}