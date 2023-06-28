import { Component } from '@angular/core';
import { Ingreso } from './ingresos/ingresos.model';
import { Egreso } from './egresos/egresos.model';
import { ingresosService } from './ingresos/ingreso.service';
import { egresosService } from './egresos/egresos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-presupuesto';
    ingresos :Ingreso[]=[];
    egresos: Egreso[]=[];
constructor (private ingresoServicio: ingresosService, 
            private egresoService: egresosService
            ){
              this.ingresos=ingresoServicio.ingresos;
              this.egresos= egresoService.egresos
            }
getIngresoTotal(){
  let ingresoTotal=0
  this.ingresos.forEach (ingreso=>{
    ingresoTotal+=ingreso.valor;
  });
  return ingresoTotal;
}

getEgresoTotal(){
  let egresoTotal=0;
  this.egresos.forEach(egreso=>{
    egresoTotal-=egreso.valor
  });
  return egresoTotal;
}

getPorcentajeTotal(){
  return this.getEgresoTotal()/this.getIngresoTotal();
}

getPresupuestoTotal(){
  return this.getIngresoTotal ()+this.getEgresoTotal();
}
}
