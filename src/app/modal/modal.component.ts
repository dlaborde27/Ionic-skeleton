import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  
  canDismiss = false;

  presentingElement: Element | null = null;

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page') as Element | null;
  }

  onTermsChanged(event: Event) {
    const ev = event as any;
    this.canDismiss = ev.detail.checked;
  }
}
