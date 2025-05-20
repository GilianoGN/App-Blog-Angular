import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-unicard',
  imports: [],
  templateUrl: './unicard.component.html',
  styleUrl: './unicard.component.css'
})
export class UnicardComponent {

  constructor(private appComponent: AppComponent) {
    this.appComponent.ActiveHome;
    this.appComponent.ActiveArtigo;
    this.appComponent.ActiveApresent;
  }

  Ativacao(indice: number, artigo: number) {
    this.appComponent.Ativacao(indice, artigo);
  }
}
