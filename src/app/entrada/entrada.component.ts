import { Component } from '@angular/core';
import { ingresosService } from '../ingresos/ingreso.service';
import { egresosService } from '../egresos/egresos.service';
import { Ingreso } from '../ingresos/ingresos.model';
import { Egreso } from '../egresos/egresos.model';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent {
 tipo='sumar';
 descripcionInput:string;
 valorInput:number;

constructor (private ingresoService: ingresosService, private egresoService: egresosService)
{}

  tipoOperacion(e){
    this.tipo=e.target.value;
  }

  agregarValor(){
    if(this.tipo==='sumar')
    {this.ingresoService.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput))}
  else{
    this.egresoService.egresos.push(new Egreso(this.descripcionInput, this.valorInput))}
  }
}


