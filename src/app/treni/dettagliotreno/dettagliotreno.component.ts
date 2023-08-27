import { Component, Input, OnInit } from '@angular/core';
import { Metro } from '../../model/metro.model';

@Component({
  selector: 'ca-dettaglio',
  template: `
  <app-menu [menuBack]="menuBack"></app-menu>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./dettagliotreno.component.css'],
})
export class DettagliotrenoComponent implements OnInit {
  menuBack:string = '';

  constructor() {
  }
  ngOnInit() {
    this.menuBack = 'ON'
  }

}
