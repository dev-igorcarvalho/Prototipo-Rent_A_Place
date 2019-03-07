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
     private route: ActivatedRoute) { }

  ngOnInit() {
    let localDataSource = this.dataSource.localDataSource;
    this.paramId = this.route.snapshot.params['id'];
    for (let local of localDataSource) {
      if (local.id ===  parseInt(this.paramId)){
        this.local = local;
      }
    }
  }

  logoButton: string = '../../../../assets/images/logo.png'

  paramId: string;
  local: Local;

}
