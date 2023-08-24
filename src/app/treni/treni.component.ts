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
        (inPartenza)="partiti($event)"
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

  treniPartiti!: string;

  constructor() {
    this.listaMetro = [];
    this.treniPartiti = "";
    this.now = new Date().getTime();
    
  }
  ngOnInit() {
    this.listaMetro = LISTAMETRO;
  }
  setMetro(t:any) {
    this.trenoSelezionato = t;

  }
  partiti(id:string) {
    this.treniPartiti += "|" + id;
  }
}
