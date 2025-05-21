import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePagesComponent } from './pages/home.pages/home.pages.component';
import { ArtigoPagesComponent } from './pages/artigo.pages/artigo.pages.component';
import { ApresentPagesComponent } from './pages/apresent.pages/apresent.pages.component';
import { CommonModule, ViewportScroller } from '@angular/common';
import { fakeData } from './data/dataFake';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomePagesComponent, ArtigoPagesComponent, ApresentPagesComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ActiveHome!: boolean;
  ActiveArtigo!: boolean;
  ActiveApresent!: boolean;
  Active: number = 5;

  constructor(private scroller: ViewportScroller) { }

  ngOnInit() {
    this.ActiveHome = true;
    this.ActiveArtigo = false;
    this.ActiveApresent = false;
    this.Active = Math.floor(Math.random() * 5);
    const dataItem = fakeData
     for (let i = 0; i < fakeData.length; i++) {
      dataItem[i].ativo = false;
      if (fakeData[i].id == this.Active) {
        dataItem[i].ativo = true;
      } 
    }
  }

  Ativacao(indice: number, artigo: number){
    this.ActiveHome = false;
    this.ActiveArtigo = false;
    this.ActiveApresent = false;
    if (indice == 2 && this.ActiveArtigo && this.Active === artigo) {
    }
    if (indice == 1) {
      this.ActiveHome = true;
    } else if (indice == 2) {
      this.Active = artigo;
      this.ActiveArtigo = true;
    } else if (indice == 3) {
      this.ActiveApresent = true;
    }
    this.scroller.scrollToPosition([0,0]);
  }
}