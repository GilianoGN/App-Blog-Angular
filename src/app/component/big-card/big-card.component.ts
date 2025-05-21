import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { fakeData } from '../../data/dataFake';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {
  id: number = 5;
  photo!: string;
  title!: string;
  resume!: string;
  date!: string;

  constructor(private appComponent: AppComponent) {}
  
  ngOnInit(): void {
        const dataItem = fakeData
    for (let i = 0; i < fakeData.length; i++) {
      if (fakeData[i].ativo) {
        this.id = dataItem[i].id;
      } 
    }

    if (this.id !== undefined && this.id >= 0 && this.id < fakeData.length) {
      const dataItem = fakeData.find(item => item.id === this.id);
      if (dataItem) {
        this.photo = dataItem.photo;
        this.title = dataItem.title;
        this.resume = dataItem.resume;
        this.date = dataItem.date;
      } else {
        console.warn('Item com ID ${this.id} não encontrado.')
        this.photo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png';
        this.title = 'Artigo não encontrado';
        this.resume = "Este artigo não pôde ser carregado.";
        this.date = 'Desconhecido';
      }
    } else {
      console.warn('ID inválido ou fora do intervalo.');
      this.photo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png';
      this.title = 'Artigo não encontrado';
      this.resume = "Este artigo não pôde ser carregado.";
      this.date = 'Desconhecido';
    }
  }

  Ativacao(indice: number) {
    this.appComponent.Ativacao(indice, this.id);
  }
}