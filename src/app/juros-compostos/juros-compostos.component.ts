import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-compostos',
  templateUrl: './juros-compostos.component.html',
  styleUrls: ['./juros-compostos.component.css'],
})
export class JurosCompostosComponent implements OnInit {
  capitalCompostos: number;
  jurosComp: number;
  tempoAplicacaoCompostos: number;
  result: number = 0;
  juros: number = 0;

  jurosCompostos() {
    this.result =
      this.capitalCompostos *
      Math.pow(1 + this.jurosComp / 100, this.tempoAplicacaoCompostos);
    this.juros = this.result - this.capitalCompostos;

    console.log('juros compostos = ' + this.juros);
    console.log('total = ' + (this.juros + this.capitalCompostos) + ' reais');
  }

  constructor() {}

  ngOnInit() {}
}
