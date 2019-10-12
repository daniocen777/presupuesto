import { Injectable } from "@angular/core";
import { Ingreso } from "../model/ingreso";

@Injectable({
  providedIn: "root"
})
export class IngresoService {
  ingresos: Ingreso[] = [
    new Ingreso("Salario", 4000),
    new Ingreso("Ventas de carro", 400)
  ];

  constructor() {}

  eliminar(ingreso: Ingreso) {
    const indice: number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(indice, 1);
  }
}
