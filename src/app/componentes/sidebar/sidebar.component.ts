import { Component, OnInit } from '@angular/core';
import { SidebarServiceService } from 'src/app/services/sidebar-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private sidebarService: SidebarServiceService) { }

  ngOnInit() {
  }

  open() {
    this.sidebarService.openNav();
  }
  close() {
    this.sidebarService.closeNav();
  }
}
