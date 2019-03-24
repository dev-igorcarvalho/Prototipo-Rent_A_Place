import { Component, Input, OnInit } from '@angular/core';
import { Local } from 'src/app/models/local';
import { NavigateService } from 'src/app/services/navigate.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  local: Local;


}
