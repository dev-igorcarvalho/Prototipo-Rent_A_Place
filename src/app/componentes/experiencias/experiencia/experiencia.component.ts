import { Component, Input, OnInit } from '@angular/core';
import { Local } from 'src/app/models/local';
import { NavigateService } from 'src/app/services/navigate.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  constructor(private navigateService: NavigateService) { }
  
  localOrMap = false;
  
  ngOnInit() {
  }
  
  @Input()
  local: Local;

  navigate(id: number) {
    this.navigateService.navigate(id);
  }

  switchLocalToMap() {
    this.localOrMap = !this.localOrMap;
  }

}
