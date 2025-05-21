import { Component, Input } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { fakeData } from '../../../data/dataFake';

@Component({
  selector: 'app-unicard',
  imports: [],
  templateUrl: './unicard.component.html',
  styleUrl: './unicard.component.css'
})
export class UnicardComponent {
  @Input() id!: number;
  photo!: string;
  title!: string;
  resume!: string;
  author!: string;
  date!: string;

  constructor(private appComponent: AppComponent) {}
  
  ngOnInit(): void {
    if (this.id !== undefined && this.id >= 0 && this.id < fakeData.length) {
      const dataItem = fakeData.find(item => item.id === this.id);
      if (dataItem) {
        this.photo = dataItem.photo;
        this.title = dataItem.title;
        this.resume = dataItem.resume;
        this.author = dataItem.author;
        this.date = dataItem.date;
      } else {
        console.warn('Item com ID ${this.id} não encontrado.')
        this.photo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png';
        this.title = 'Artigo não encontrado';
        this.resume = "Este artigo não pôde ser carregado.";
        this.author = 'Desconhecido';
        this.date = 'Desconhecido';
      }
    } else {
      console.warn('ID inválido ou fora do intervalo.');
      this.photo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png';
      this.title = 'Artigo não encontrado';
      this.resume = "Este artigo não pôde ser carregado.";
      this.author = 'Desconhecido';
      this.date = 'Desconhecido';
    }
  }

  Ativacao(indice: number) {
    this.appComponent.Ativacao(indice, this.id);
  }
}