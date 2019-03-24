import { Component, OnInit } from '@angular/core';
import { NavigateService } from 'src/app/services/navigate.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor( private navigateService: NavigateService ) { }

  ngOnInit() {
    this.nappHost = false;
  }

  logoButton: string = '../../../assets/images/logos/confirm.png'

  nappHost: boolean;

  host() {
    this.nappHost = !this.nappHost;
    console.warn('NappHost Value: ' + this.nappHost);
  }

  register() {
    if(this.nappHost){
      this.navigateService.goTO('/register');
    } else {
      this.navigateService.goTO('/home');
    }
  }

}
