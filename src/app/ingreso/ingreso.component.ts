import { Component, OnInit } from "@angular/core";
import { Ingreso } from "../model/ingreso";
import { IngresoService } from "../services/ingreso.service";

@Component({
  selector: "app-ingreso",
  templateUrl: "./ingreso.component.html",
  styleUrls: ["./ingreso.component.scss"]
})
export class IngresoComponent implements OnInit {
  ingresos: Ingreso[] = [];

  constructor(private ingresoServicio: IngresoService) {}

  ngOnInit() {
    this.ingresos = this.ingresoServicio.ingresos;
  }

  eliminarRegistro(ingreso: Ingreso) {
    this.ingresoServicio.eliminar(ingreso);
  }
}
