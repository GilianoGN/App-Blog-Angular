import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe CommonModule para *ngIf
import { AppComponent } from '../../app.component'; // Mantido para a função Ativacao

@Component({
  selector: 'app-menu-bar',
  standalone: true, // Adicione standalone se não for um módulo, ou remova se for
  imports: [CommonModule], // Adicione CommonModule aqui
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  // Propriedade para controlar qual submenu está ativo pelo clique
  activeSubmenu: string | null = null; // 'artigo', 'solutions', 'learn', ou null

  // Propriedades para controlar o hover (para manter o comportamento de hover)
  isHoveringArtigo: boolean = false;
  isHoveringSolutions: boolean = false;
  isHoveringLearn: boolean = false;

  constructor(private appComponent: AppComponent) { }

  Ativacao(indice: number, artigo: number) {
    this.appComponent.Ativacao(indice, artigo);
    // Não precisa chamar closeAllSubmenus() aqui, pois já está no HTML dos links
  }

  // Método para alternar a visibilidade de um submenu específico por clique
  toggleSubmenu(menuName: string) {
    // Se o submenu clicado já estiver ativo, fecha-o. Senão, abre-o.
    this.activeSubmenu = (this.activeSubmenu === menuName) ? null : menuName;
    // Reseta o estado de hover para garantir que não haja conflito visual
    this.isHoveringArtigo = false;
    this.isHoveringSolutions = false;
    this.isHoveringLearn = false;
  }

  // Método para fechar todos os submenus
  closeAllSubmenus() {
    this.activeSubmenu = null; // Fecha o submenu ativo pelo clique
    this.isHoveringArtigo = false; // Garante que o hover também seja resetado
    this.isHoveringSolutions = false;
    this.isHoveringLearn = false;
  }
}