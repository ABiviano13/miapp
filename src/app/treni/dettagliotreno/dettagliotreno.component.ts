import { Component, Input } from '@angular/core';
import { Metro } from './../../model/metro.model';

@Component({
  selector: 'ca-dettaglio',
  template: `
    <div *ngIf="treno" [ngClass]="chiudereDettaglio">
      <h1>Dettaglio Treno</h1>
      <p>ID: {{ treno.idt }}</p>
      <p>Linea: {{ treno.linea }}</p>
      <button (click)="chiudi()">Chiudi dettaglio</button>
    </div>
  `,
  styleUrls: ['./dettagliotreno.component.css'],
})
export class DettagliotrenoComponent {
  @Input() treno!: Metro;
  chiudereDettaglio!: object;
  boolClose!: boolean;
  boolOpen!: boolean;
  constructor() {
    this.boolClose = false;
    this.boolOpen = true;
  }
  ngOnInit() {
  }

  chiudi() {
    this.boolClose = true;
    this.boolOpen = false;
    this.chiudereDettaglio = {'display-none': this.boolClose, 'display-block' : this.boolOpen}
  }

}
