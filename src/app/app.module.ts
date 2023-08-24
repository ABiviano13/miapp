import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TreniComponent } from './treni/treni.component';
import { MetroComponent } from './metro/metro.component';
import { MmssPipe } from './mmss.pipe';
import { DettagliotrenoComponent } from './treni/dettagliotreno/dettagliotreno.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TreniComponent,
    MetroComponent,
    MmssPipe,
    DettagliotrenoComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
