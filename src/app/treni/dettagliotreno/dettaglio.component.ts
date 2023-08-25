import { TreniService } from '../../service/treni.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Metro } from 'src/app/model/metro.model';

@Component({
  selector: 'ca-dettaglio',
  template: `
    <div *ngIf="treno">
      <p> Treno Linea: {{treno.linea}}</p>
      <p> ID: {{treno.idt}} </p>
    </div>
  `,
  styleUrls: ['./treni.component.css'],
})
export class DettaglioComponent implements OnInit {

    idTreno!: string;
    treno!: Metro;
  
    constructor(private route: ActivatedRoute, private treniService: TreniService) {
      
    }
    ngOnInit(){
      this.idTreno = this.route.snapshot.paramMap.get('id')!;
      // this.getDettaglioMetro(this.idTreno);
    }

    // getDettaglioMetro(idtr:string) {
    //   this.treno = this.treniService.getDettaglioMetro(idtr);
    // }
}
