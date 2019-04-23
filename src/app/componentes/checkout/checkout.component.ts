import { Component, OnInit } from '@angular/core';
import { DataSourceService } from 'src/app/services/data-source.service';
import { ActivatedRoute } from '@angular/router';
import { NavigateService } from 'src/app/services/navigate.service';
import { Local } from 'src/app/models/local';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

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
  }

  logoButton: string = '.../../../../../assets/images/logos/confirm.png'

  paramId: string;
  local: Local;

}
