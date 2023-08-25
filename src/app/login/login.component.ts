import { Component} from '@angular/core';
import { Metro } from './../model/metro.model';

@Component({
    selector: 'ca-Login',
    template: `
    <app-menu></app-menu>
    <div>
        <h1> Login App </h1>

        <form> 
        
           <label> Username </label>
           <input type="text" name="username">
           <label> Password </label>
           <input type="password" name="password">
           <button type="submit">Login</button>
        
        </form>
    </div>
    `
})

export class LoginComponent {

    constructor() {

    }

}