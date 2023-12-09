import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Cards', url: 'Cards', icon: 'card' },
    { title: 'Modal', url: 'Modal', icon: 'alert-circle' },
    { title: 'Tabs', url: 'Tabs', icon: 'square' },
    { title: 'Items', url: 'Items', icon: 'pricetags' },
  ];
  constructor() {}
}
