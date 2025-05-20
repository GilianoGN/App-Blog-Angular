import { Component } from '@angular/core';
import { AdvertisingBarComponent } from '../../component/advertising-bar/advertising-bar.component'; 
import { MenuBarComponent } from '../../component/menu-bar/menu-bar.component';

@Component({
  selector: 'app-apresent',
  imports: [AdvertisingBarComponent, MenuBarComponent],
  templateUrl: './apresent.pages.component.html',
  styleUrl: './apresent.pages.component.css'
})
export class ApresentPagesComponent {

}
