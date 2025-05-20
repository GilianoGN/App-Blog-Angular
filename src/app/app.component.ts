import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePagesComponent } from './pages/home.pages/home.pages.component';
import { ArtigoPagesComponent } from './pages/artigo.pages/artigo.pages.component';
import { ApresentPagesComponent } from './pages/apresent.pages/apresent.pages.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomePagesComponent, ArtigoPagesComponent, ApresentPagesComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'app-blog-angular';
  ActiveHome!: boolean;
  ActiveArtigo!: boolean;
  ActiveApresent!: boolean;

  constructor() {
    this.ActiveHome;
    this.ActiveArtigo;
    this.ActiveApresent;
  }

  ngOnInit() {
    this.ActiveHome = true;
    this.ActiveArtigo = false;
    this.ActiveApresent = false;
  }

  Ativacao(indice: number, artigo: number){
    if (indice == 1) {
      this.ActiveHome = true;
      this.ActiveArtigo = false;
      this.ActiveApresent = false;
    } else if (indice == 2) {
      this.ActiveHome = false;
      this.ActiveArtigo = true;
      this.ActiveApresent = false;
    } else if (indice == 3) {
      this.ActiveHome = false;
      this.ActiveArtigo = false;
      this.ActiveApresent = true;
    }
  }
}
