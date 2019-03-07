import { Component, OnInit, Input } from '@angular/core';
import { Local } from 'src/app/models/local';
import { NavigateService } from 'src/app/services/navigate.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private navigateService: NavigateService) { }

  ngOnInit() {
  }

  @Input()
  result: Local 

  navigate (id: number){
    this.navigateService.navigate(id);
  }
}
