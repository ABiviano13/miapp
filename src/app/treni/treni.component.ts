import { TreniService } from '../service/treni.service';
import { MetroService } from '../service/metro.service';
import { Component, OnInit } from '@angular/core';
import { Metro } from './../model/metro.model';
import { Router } from '@angular/router';


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
      <div *ngIf=""errorMsg> {{ errorMsg }}</div>
    </div>
  <p>{{ treniPartiti }}</p>
  `
})
export class TreniComponent implements OnInit {
  listaMetro: Metro[];
  now!: number;
  treniPartiti!: string;
  errorMsg!: any;

  constructor(private router: Router, private treniService: TreniService) {
    this.listaMetro = [];
    this.treniPartiti = "";
    this.now = new Date().getTime();
    
  }
  ngOnInit() {
    this.getListaMetroObservable();
  }
  getListaMetroObservable() {
    this.treniService.getListaMetroObservable()
                      .subscribe(
                        (risp:any) => this.listaMetro = risp,
                        (error:any) => this.errorMsg = error
                      );
                      
  }
  setMetro(id:string) {
    this.router.navigate(['inArrivo/dettaglio', id]);

  }
  partiti(id:string) {
    this.treniPartiti += "|" + id;
  }
}
