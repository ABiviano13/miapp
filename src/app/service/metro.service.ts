import { Injectable } from '@angular/core';
import { Metro } from '../model/metro.model';
import { LISTAMETRO } from '../dati/metroremoti';
import { TreniService } from './treni.service';

// Primo passaggio
import { HttpClient } from '@angular/common/http'; 
import { throwError, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class MetroService {
    // Secondo passaggio
    private apiGetUrl = 'https://www.dcopelli.it/test/angular/metro';
    // Terzo passaggio
    constructor(private http: HttpClient) {}

    getListaMetroObservable(): Observable<Metro[]> {
        return this.http.get<Metro[]>(this.apiGetUrl)
                        .pipe(
                            map((risposta:any)=> risposta['dati']),
                            catchError(this.handleErrorObs)
                        );
    }

    getDettaglioMetroObservable(idt: string): Observable<Metro> {
        return this.http.get<Metro>(this.apiGetUrl + '?idt='+idt)
                        .pipe(
                            map((risposta:any)=> risposta['dati']),
                            catchError(this.handleErrorObs)
                        );
    }

    private handleErrorObs(error:any) {
        return throwError(error.message || error);
    }

}