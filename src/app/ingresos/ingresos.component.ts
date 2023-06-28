import { Component } from '@angular/core';
import { Ingreso } from './ingresos.model';
import { ingresosService } from './ingreso.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})

export class IngresosComponent {

  ingresos :Ingreso[]=[];

  constructor (private ingresoService:ingresosService){

  }

 ngOnInit(){
  this.ingresos=this.ingresoService.ingresos;
  console.log (this.ingresos.values);

 }

 eliminarIngresos(ingreso:Ingreso){
  this.ingresoService.eliminar(ingreso);

}
}