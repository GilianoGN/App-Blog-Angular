import { Component } from '@angular/core';
import { AdvertisingBarComponent } from '../../component/advertising-bar/advertising-bar.component'; 
import { MenuBarComponent } from '../../component/menu-bar/menu-bar.component';

@Component({
  selector: 'app-artigo',
  imports: [AdvertisingBarComponent, MenuBarComponent],
  templateUrl: './artigo.pages.component.html',
  styleUrl: './artigo.pages.component.css'
})
export class ArtigoPagesComponent {

}
