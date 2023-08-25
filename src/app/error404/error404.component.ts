import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    template: `
    <h1> Error 404 </h1>
    <button (click)="backToHome()"> Torna alla Home </button>
    `
})

export class Error404Component {
    constructor(private router:Router) {

    }

    backToHome() {
        this.router.navigate(['/']);
    }
}