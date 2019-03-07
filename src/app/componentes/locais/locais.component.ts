import { DataSourceService } from './../../services/data-source.service';
import { Local } from '../../models/local';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locais',
  templateUrl: './locais.component.html',
  styleUrls: ['./locais.component.css']
})
export class LocaisComponent implements OnInit {

  constructor( private dataSource: DataSourceService) {}

  ngOnInit() {
    this.localDataSource = this.dataSource.localDataSource;
  }

  localDataSource: Local[] ;

  

}
