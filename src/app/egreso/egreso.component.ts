import { Component, OnInit, Input } from "@angular/core";
import { Egreso } from "../model/egreso";
import { EgresoService } from "../services/egreso.service";

@Component({
  selector: "app-egreso",
  templateUrl: "./egreso.component.html",
  styleUrls: ["./egreso.component.scss"]
})
export class EgresoComponent implements OnInit {
  egresos: Egreso[] = [];
  // Recibiendo el ingreso total => para el porcentaje de egreso
  @Input() ingresoTotal: number;

  constructor(private egresoServicio: EgresoService) {}

  ngOnInit() {
    this.egresos = this.egresoServicio.egresos;
  }

  eliminarEgreso(egreso: Egreso) {
    this.egresoServicio.eliminar(egreso);
  }

  calcularPorcentaje(egreso: Egreso) {
    return egreso.valor / this.ingresoTotal;
  }
}
