import { Ingreso } from "./ingresos.model";

export class ingresosService{
    ingresos :Ingreso[]=[
        new Ingreso ("Salario", 7000),
        new Ingreso ("Despensa", 2580),
        new Ingreso ("Transporte", 1580)
    ];

eliminar(ingreso:Ingreso){
    const indice:number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(indice,1);
}

    }