import { Component, OnInit } from '@angular/core';
import { Metro } from './../model/metro.model';

//importo i dati remoti
import { LISTAMETRO } from './../dati/metroremoti';

@Component({
  selector: 'app-treni',
  template: `
    <div class="lista-treni">
      <ca-metro
        *ngFor="let metro of listaMetro"
        [datiIn]="metro"
        [ora]="now"
        (click)="setMetro(metro)"
      ></ca-metro>
    </div>
    <ca-dettaglio [treno]="trenoSelezionato"></ca-dettaglio>
  `,
  styleUrls: ['./treni.component.css'],
})
export class TreniComponent implements OnInit {
  listaMetro: Metro[];

  trenoSelezionato!: Metro;
  now!: number;
  aprireDettaglio!: string;

  constructor() {
    this.listaMetro = [];
    
  }
  ngOnInit() {
    this.listaMetro = LISTAMETRO;
  }
  setMetro(t:any) {
    this.aprireDettaglio= 'display-block'
    this.trenoSelezionato = t;

  }
}
