import { NavigateService } from 'src/app/services/navigate.service';
import { Component, OnInit } from '@angular/core';
import { Local } from 'src/app/models/local';
import { DataSourceService } from 'src/app/services/data-source.service';
import { forEach } from '@angular/router/src/utils/collection';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  constructor(private dataSource: DataSourceService,
    private route: ActivatedRoute, private navigateService: NavigateService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    let localDataSource = this.dataSource.localDataSource;
    this.paramId = this.route.snapshot.params['id'];
    for (let local of localDataSource) {
      if (local.id === parseInt(this.paramId)) {
        this.local = local;
      }
    }

    this.time15 = false;
    this.time30 = false;
    this.time45 = false;
    this.time60 = false;
    this.time90 = false;

    this.shower = false;
    this.tv = false;
    this.gamepad = false;
    this.air = false;
    this.wifi = false;

  }

  logoButton: string = '../../../assets/images/logos/gonapp.png'

  paramId: string;
  local: Local;

  time15: boolean;
  time30: boolean;
  time45: boolean;
  time60: boolean;
  time90: boolean;

  shower: boolean;
  tv: boolean;
  gamepad: boolean;
  air: boolean;
  wifi: boolean;


  localOrMap = false;
  imgOffice = false;


  trocarParaOffice() {
    if (this.local.id === 2) {
      if (this.imgOffice == false) {
        this.local.fotoUrl = "../../../assets/images/office.jpg";
        this.imgOffice = !this.imgOffice;
      } else {
        this.local.fotoUrl = "../../../assets/images/local6.jpg";
        this.imgOffice = !this.imgOffice;
      }
    }
  }

  goCheckOut(id: number) {
    this.navigateService.proceedCheckout(id);
  }

  select(type: string) {
    switch (type) {
      case 'shower': {
        this.shower = !this.shower;
        break;
      }
      case 'tv': {
        this.tv = !this.tv;
        break;
      }
      case 'gamepad': {
        this.gamepad = !this.gamepad;
        break;
      }
      case 'air': {
        this.air = !this.air;
        break;
      }
      case 'wifi': {
        this.wifi = !this.wifi;
        break;
      }

      case 'time15': {
        this.time15 = !this.time15;
        this.time30 = false;
        this.time45 = false;
        this.time60 = false;
        this.time90 = false;
        break;
      }

      case 'time30': {
        this.time15 = false;
        this.time30 = !this.time30;
        this.time45 = false;
        this.time60 = false;
        this.time90 = false;
        break;
      }

      case 'time45': {
        this.time15 = false;
        this.time30 = false;
        this.time45 = !this.time45;
        this.time60 = false;
        this.time90 = false;
        break;
      }

      case 'time60': {
        this.time15 = false;
        this.time30 = false;
        this.time45 = false;
        this.time60 = !this.time60;
        this.time90 = false;
        break;
      }

      case 'time90': {
        this.time15 = false;
        this.time30 = false;
        this.time45 = false;
        this.time60 = false;
        this.time90 = !this.time90;
        break;
      }

      default: {
        //statements; 
        break;
      }
    }

  }

  switchLocalToMap() {
    this.localOrMap = !this.localOrMap;
  }
}
