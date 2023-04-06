import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-simples',
  templateUrl: './juros-simples.component.html',
  styleUrls: ['./juros-simples.component.css'],
})
export class JurosSimplesComponent implements OnInit {
  capital: number;
  juros: number;
  tempoAplicacao: number;
  result: number = 0;

  jurosSimples() {
    this.result = this.capital * (this.juros / 100) * this.tempoAplicacao;
    console.log(this.result);
    console.log('total = ' + (this.capital + this.result) + ' reais');
  }

  constructor() {}

  ngOnInit() {}
}
