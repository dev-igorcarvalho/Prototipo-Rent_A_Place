import { Component, OnInit } from '@angular/core';
import { DataSourceService } from 'src/app/services/data-source.service';
import { ActivatedRoute } from '@angular/router';
import { NavigateService } from 'src/app/services/navigate.service';
import { Local } from 'src/app/models/local';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private dataSource: DataSourceService,
    private route: ActivatedRoute, private navigateService: NavigateService) { }

 ngOnInit() {
   let localDataSource = this.dataSource.localDataSource;
   this.paramId = this.route.snapshot.params['id'];
   for (let local of localDataSource) {
     if (local.id ===  parseInt(this.paramId)){
       this.local = local;
     }
   }
 }

 logoButton: string = '../../../assets/images/logos/gonapp.png'

 paramId: string;
 local: Local;

}
