import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  @Input() menuBack!: string;
  // definiamo la logica del componente ed eventuali operazioni di inizializzazione dati

  //definiamo 3 proprietà del nostro menu (typescript)
  link_menu_1: string;
  link_menu_2: string;
  link_menu_3: string;

  constructor() {
    this.link_menu_1 = 'Treni';
    this.link_menu_2 = 'Preferiti';
    this.link_menu_3 = 'Login';
  }
}
