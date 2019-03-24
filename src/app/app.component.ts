import { Component, OnInit } from '@angular/core';
import * as $ from '../assets/js/core/jquery.min.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public ngOnInit() {
    this.loading = true;
    this.app = false;
    setTimeout(
      () =>
      this.swap(),
      500);
  }

  loading: boolean;
  app: boolean;

  swap() {
    this.loading = !this.loading;
    this.app = !this.app;
  }
  

}
