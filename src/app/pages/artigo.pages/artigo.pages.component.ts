import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { AdvertisingBarComponent } from '../../component/advertising-bar/advertising-bar.component'; 
import { MenuBarComponent } from '../../component/menu-bar/menu-bar.component';
import { fakeData } from '../../data/dataFake';

@Component({
  selector: 'app-artigo',
  imports: [AdvertisingBarComponent, MenuBarComponent],
  templateUrl: './artigo.pages.component.html',
  styleUrl: './artigo.pages.component.css'
})
export class ArtigoPagesComponent implements OnInit, OnChanges {
  @Input() id: number = 5;
  photo!: string;
  title!: string;
  description!: string;
  author!: string;
  date!: string;

  ngOnInit(): void {
    this.loadArticleContent()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id'] && changes['id'].currentValue !== changes['id'].previousValue) {
      this.loadArticleContent();
    }
  }
  private loadArticleContent(): void {
    if (this.id !== undefined && this.id >= 0 && this.id < fakeData.length) {
      const dataItem = fakeData.find(item => item.id === this.id);
      if (dataItem) {
        this.photo = dataItem.photo;
        this.title = dataItem.title;
        this.description = dataItem.description;
        this.date = dataItem.date;
      } else {
        console.warn('Item com ID ${this.id} não encontrado.')
        this.photo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png';
        this.title = 'Artigo não encontrado';
        this.description = "Este artigo não pôde ser carregado.";
        this.date = 'Desconhecido';
      }
    } else {
      console.warn('ID inválido ou fora do intervalo.');
      this.photo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png';
      this.title = 'Artigo não encontrado';
      this.description = "Este artigo não pôde ser carregado.";
      this.date = 'Desconhecido';
    }
  }
}
