import { Component, OnInit } from '@angular/core';
import { DataSourceService } from 'src/app/services/data-source.service';
import { Local } from 'src/app/models/local';
import { NavigateService } from 'src/app/services/navigate.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {

  constructor(private dataSource: DataSourceService, private navigateService: NavigateService) { }

  ngOnInit() {
    this.localDataSource = this.dataSource.localDataSource;
  }

  localDataSource: Local[];

  navigate(id: number) {
    this.navigateService.navigate(id);
  }

}
