import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-menu-bar',
  imports: [],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {

  constructor(private appComponent: AppComponent) {
    this.appComponent.ActiveHome;
    this.appComponent.ActiveArtigo;
    this.appComponent.ActiveApresent;
  }

  Ativacao(indice: number, artigo: number) {
    this.appComponent.Ativacao(indice, artigo);
  }
}
