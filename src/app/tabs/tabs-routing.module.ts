import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
{
    path: '',
    component: FooterComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'radio',
        loadChildren: () => import('./radio/radio.module').then((m) => m.RadioModule),
      },
      {
        path: 'library',
        loadChildren: () => import('./library/library.module').then((m) => m.LibraryModule),
      },
      {
        path: 'search',
        loadChildren: () => import('./search/search.module').then((m) => m.SearchModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
