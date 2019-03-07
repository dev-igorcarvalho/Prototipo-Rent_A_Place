import { Component, OnInit } from '@angular/core';
import { DataSourceService } from 'src/app/services/data-source.service';
import { Local } from 'src/app/models/local';
import { NavigateService } from 'src/app/services/navigate.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private dataSource: DataSourceService, private navigateService: NavigateService) {}

  ngOnInit() {
    this.results = this.dataSource.localDataSource;
  }

  results: Local[] ;

}
