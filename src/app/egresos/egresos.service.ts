import { Egreso } from "./egresos.model";

export class egresosService{
    egresos :Egreso[]=[
        new Egreso ("ISR",325),
        new Egreso ("Prestamo",1500),
        new Egreso ("renta",2500)
    ];

eliminar (egreso:Egreso) {
const indice : number = this.egresos.indexOf(egreso);
this.egresos.splice(indice,1);
}
}