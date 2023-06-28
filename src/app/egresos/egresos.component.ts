import { Component, Input } from '@angular/core';
import { Egreso } from './egresos.model';
import { egresosService } from './egresos.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent {
 egresos:Egreso[]=[];
 @Input() ingresoTotal: number;


  constructor (private egresoService:egresosService){
    this.egresos=this.egresoService.egresos;

  }

  eliminarEgreso (egreso:Egreso){
    this.egresoService.eliminar(egreso);
  }
calcularPorcentaje(egreso:Egreso){
  return egreso.valor/this.ingresoTotal;
}

}
