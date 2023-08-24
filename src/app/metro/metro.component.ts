import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Metro } from './../model/metro.model';

@Component({
    selector: 'ca-metro',
    template: `
    <div [ngStyle]="stato">
        <p>Linea: {{ datiIn.linea }} </p>
        <p>Tempo: {{ datiIn.tempo }} </p>
    </div>
    `
})

export class MetroComponent implements OnInit {

    @Input() datiIn!: Metro;
    @Input() ora!: number;

    @Output() inPartenza = new EventEmitter<string>();
    stato!:Object;
    oraPartenza!: number;
    attesa!: number;

    constructor() {
    }
    ngOnInit() {
        this.oraPartenza = this.datiIn.tempo;
        this.attesa = this.oraPartenza-this.ora;
        let x = setInterval(() => {
            this.attesa-=3000;
            if(this.attesa<=0) {
                //blocchiamo il timer e mandiamo l'evento (in uscita)
                clearInterval(x);
                //passiamo l'id del treno e notifichiamo il cambio
                this.inPartenza.emit(this.datiIn.idt);
                //modifichiamo lo stato di visualizzazione del componente
                this.stato= {'display': 'none'};
            }
        }, 3000);
    }
}