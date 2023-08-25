import { Component, Input, OnInit } from '@angular/core';
import { Metro } from '../../model/metro.model';

@Component({
  selector: 'ca-dettaglio-treno',
  template: `
  <app-menu [menuBack]="menuBack"></app-menu>
  <div>
    <a routerLink='rosso'>Treno Rosso</a> <br>
    <a routerLink='giallo'>Treno Giallo</a> <br>
    <a routerLink='verde'>Treno Verde</a>
  </div>
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
