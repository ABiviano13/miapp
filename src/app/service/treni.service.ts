import { Injectable } from '@angular/core';
import { Metro } from '../model/metro.model';
import { LISTAMETRO } from '../dati/metroremoti';
import { MetroService } from './metro.service';

@Injectable({
  providedIn: 'root'
})
export class TreniService {

  constructor() { }
  
  getListaMetro(): Metro[] {
    return LISTAMETRO;
  }

}
