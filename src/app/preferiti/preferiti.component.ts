import { Component} from '@angular/core';
import { Metro } from './../model/metro.model';

@Component({
    selector: 'ca-preferiti',
    template: `
    <app-menu></app-menu>
    <div>
        <h1> Preferiti </h1>
        // lista dei preferiti con elenco chat
    </div>
    `
})

export class PreferitiComponent {

    constructor() {

    }

}