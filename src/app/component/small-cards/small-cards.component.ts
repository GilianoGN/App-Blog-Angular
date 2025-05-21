import { Component, OnInit } from '@angular/core';
import { UnicardComponent } from './unicard/unicard.component';
import { AppComponent } from '../../app.component';
import { fakeData } from '../../data/dataFake';

@Component({
  selector: 'app-small-cards',
  imports: [UnicardComponent],
  templateUrl: './small-cards.component.html',
  styleUrl: './small-cards.component.css'
})
export class SmallCardsComponent implements OnInit {
  smallId: number[] = [];

  constructor(private appComponent: AppComponent) {  }
  
  ngOnInit(): void {
    this.smallId = fakeData.filter(item => item.ativo === false).map(item => item.id);
  }
}