import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent  implements OnInit {
  public contacts = [
    'John Doe','John Smith','Jane Smith',
    'John Kennedy','Jane Kerry',
    'John Wayne','John Wick',
    'John Galt','Jane Lennon',
    'John Legend','Jane Hancock',
    'John Adams','Jane Quincy',
    'John Kennedy','Jane Kerry',
    'John Oliver'
  ];

  constructor() { }

  ngOnInit() {}

}
