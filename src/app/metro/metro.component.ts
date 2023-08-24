import { Component, Input, OnInit } from '@angular/core';
import { Metro } from './../model/metro.model';

@Component({
    selector: 'ca-metro',
    template: `
        <p>Linea: {{ datiIn.linea }} </p>
        <p>Tempo: {{ datiIn.tempo }} </p>
    `
})

export class MetroComponent implements OnInit {

    @Input() datiIn!: Metro;
    @Input() ora!: number;

    constructor() {
    }
    ngOnInit() {
    }
}