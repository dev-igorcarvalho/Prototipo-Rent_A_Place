import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-local',
  templateUrl: './cadastro-local.component.html',
  styleUrls: ['./cadastro-local.component.css']
})
export class CadastroLocalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.nappHost = false;
  }
  logoButton: string = '../../../assets/images/logos/confirm.png'

  nappHost: boolean;

  host() {
    this.nappHost = !this.nappHost;
    console.warn('asdasdasdas');
  }
}
