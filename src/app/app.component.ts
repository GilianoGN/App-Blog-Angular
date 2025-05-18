import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdvertisingBarComponent } from './component/advertising-bar/advertising-bar.component'; 
import { MenuBarComponent } from './component/menu-bar/menu-bar.component';
import { BigCardComponent } from './component/big-card/big-card.component';
import { SmallCardsComponent } from './component/small-cards/small-cards.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AdvertisingBarComponent, MenuBarComponent, BigCardComponent, SmallCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-blog-angular';
}
