import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-cabecero",
  templateUrl: "./cabecero.component.html",
  styleUrls: ["./cabecero.component.scss"]
})
export class CabeceroComponent implements OnInit {
  @Input() presupuesTotal: number;
  @Input() ingresoTotal: number;
  @Input() egresoTotal: number;
  @Input() porcentajeTotal: number;

  constructor() {}

  ngOnInit() {}
}
