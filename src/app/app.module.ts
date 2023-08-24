import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TreniComponent } from './treni/treni.component';
import { MetroComponent } from './metro/metro.component';
import { PreferitiComponent } from './preferiti/preferiti.component'
import { LoginComponent } from './login/login.component'
import { MmssPipe } from './mmss.pipe';
import { DettagliotrenoComponent } from './treni/dettagliotreno/dettagliotreno.component';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: TreniComponent},
      {path: 'preferiti', component: PreferitiComponent},
      {path: 'login', component: LoginComponent},
    ])
  ],
  declarations: [
    AppComponent,
    MenuComponent,
    TreniComponent,
    MetroComponent,
    MmssPipe,
    DettagliotrenoComponent,
    PreferitiComponent,
    LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
