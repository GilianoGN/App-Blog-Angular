import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-advertising-bar',
  imports: [CommonModule],
  templateUrl: './advertising-bar.component.html',
  styleUrl: './advertising-bar.component.css'
})
export class AdvertisingBarComponent {
  showBar: boolean = true;

  constructor() {
    this.showBar = true;
  }
  
  closeBar() {
    this.showBar = false;
  }
}