import { Component } from '@angular/core';

@Component({
  selector: 'app-barra-inferior',
  templateUrl: './barra-inferior.component.html',
  styleUrls: ['./barra-inferior.component.css']
})
export class BarraInferiorComponent {

  anoAtual: Date;

  constructor() {
    this.anoAtual = new Date();
  }

}
