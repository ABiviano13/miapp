import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TreniComponent } from './treni/treni.component';
import { MetroComponent } from './metro/metro.component';
import { PreferitiComponent } from './preferiti/preferiti.component'
import { LoginComponent } from './login/login.component'
import { MmssPipe } from './mmss.pipe';
import { DettagliotrenoComponent } from './treni/dettagliotreno/dettagliotreno.component';
import { DettaglioComponent } from './treni/dettagliotreno/dettaglio.component';
import { TrenoRossoComponent } from './treni/dettagliotreno/trenoRosso/trenoRosso.component';
import { TrenoGialloComponent } from './treni/dettagliotreno/trenoGiallo/trenoGiallo.component';
import { TrenoVerdeComponent } from './treni/dettagliotreno/trenoVerde/trenoVerde.component';
import { Error404Component } from './error404/error404.component';
import { TreniService } from './service/treni.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'inArrivo', component: TreniComponent},
      {path:'inArrivo/dettaglio', component: DettagliotrenoComponent,
        children: [
          {'path': 'ASD', component: TrenoRossoComponent},
          {'path': 'BFD', component: TrenoGialloComponent},
          {'path': 'AKE', component: TrenoVerdeComponent},
          {'path': ':id', component: DettagliotrenoComponent},
          {path: '', redirectTo:'/error', pathMatch: 'full'},
        ]

      },
      {path: 'preferiti', component: PreferitiComponent},
      {path: 'login', component: LoginComponent},
      {path: '', redirectTo: '/inArrivo', pathMatch: 'full'},
      {path: '**', component: Error404Component}
    ])
  ],
  declarations: [
    AppComponent,
    MenuComponent,
    TreniComponent,
    MetroComponent,
    MmssPipe,
    DettagliotrenoComponent,
    DettaglioComponent,
    TrenoRossoComponent,
    TrenoGialloComponent,
    TrenoVerdeComponent,
    PreferitiComponent,
    LoginComponent
  ],
  providers: [TreniService],
  bootstrap: [AppComponent],
})
export class AppModule {}
