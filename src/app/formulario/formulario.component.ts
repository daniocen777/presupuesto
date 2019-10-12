import { Component, OnInit } from "@angular/core";
import { IngresoService } from "../services/ingreso.service";
import { EgresoService } from "../services/egreso.service";
import { Ingreso } from "../model/ingreso";
import { Egreso } from "../model/egreso";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.scss"]
})
export class FormularioComponent implements OnInit {
  tipo: string = "ingresoOperacion";
  descripcionInput: string;
  valorInput: number;

  constructor(
    private ingresoServicio: IngresoService,
    private egresoServicio: EgresoService
  ) {}

  ngOnInit() {}

  tipoOperacion(event) {
    this.tipo = event.target.value;
  }

  agregarValor() {
    if (this.tipo == "ingresoOperacion") {
      this.ingresoServicio.ingresos.push(
        new Ingreso(this.descripcionInput, this.valorInput)
      );
    } else {
      this.egresoServicio.egresos.push(
        new Egreso(this.descripcionInput, this.valorInput)
      );
    }
  }
}
