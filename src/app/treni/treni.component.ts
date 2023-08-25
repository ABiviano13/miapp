import { TreniService } from '../service/treni.service';
import { Component, OnInit } from '@angular/core';
import { Metro } from './../model/metro.model';
import { Router } from '@angular/router';


//importo i dati remoti
import { LISTAMETRO } from './../dati/metroremoti';

@Component({
  selector: 'app-treni',
  template: `
  <app-menu></app-menu>
    <div class="lista-treni">
      <ca-metro
        *ngFor="let metro of listaMetro"
        (inPartenza)="partiti($event)"
        [datiIn]="metro"
        [ora]="now"
        (click)="setMetro(metro.idt)"
      ></ca-metro>
      <p>{{ treniPartiti }} </p>
      <ca-dettaglio-treno></ca-dettaglio-treno>
    </div>
  `,
  styleUrls: ['./treni.component.css'],
})
export class TreniComponent implements OnInit {
  listaMetro: Metro[];
  now!: number;
  treniPartiti!: string;

  constructor(private router: Router, private treniService: TreniService) {
    this.listaMetro = [];
    this.treniPartiti = "";
    this.now = new Date().getTime();
    
  }
  ngOnInit() {
    this.listaMetro = this.treniService.getListaMetro();
  }
  setMetro(id:string) {
    this.router.navigate(['inArrivo/dettaglio', id]);

  }
  partiti(id:string) {
    this.treniPartiti += "|" + id;
  }
}
