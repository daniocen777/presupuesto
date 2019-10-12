import { Injectable } from "@angular/core";
import { Egreso } from "../model/egreso";

@Injectable({
  providedIn: "root"
})
export class EgresoService {
  egresos: Egreso[] = [
    new Egreso("Renta de departamento", 900),
    new Egreso("Ropa", 435.15)
  ];

  constructor() {}

  eliminar(egreso: Egreso) {
    const indice: number = this.egresos.indexOf(egreso);
    this.egresos.splice(indice, 1);
  }
}
