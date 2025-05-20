import { Component } from '@angular/core';
import { AdvertisingBarComponent } from '../../component/advertising-bar/advertising-bar.component'; 
import { MenuBarComponent } from '../../component/menu-bar/menu-bar.component';
import { BigCardComponent } from '../../component/big-card/big-card.component';
import { SmallCardsComponent } from '../../component/small-cards/small-cards.component';

@Component({
  selector: 'app-home',
  imports: [AdvertisingBarComponent, MenuBarComponent, BigCardComponent, SmallCardsComponent],
  templateUrl: './home.pages.component.html',
  styleUrl: './home.pages.component.css'
})
export class HomePagesComponent {

}
