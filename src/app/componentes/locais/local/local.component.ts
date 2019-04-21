import { NavigateService } from './../../../services/navigate.service';
import { Component, OnInit, Input } from '@angular/core';
import { Local } from '../../../models/local';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  constructor(private navigateService: NavigateService) { }

  

  ngOnInit() {
  }

  @Input()
  local: Local

  navigate(id: number) {
    this.navigateService.navigate(id);
  }

 
}
