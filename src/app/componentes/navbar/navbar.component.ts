import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarServiceService } from 'src/app/services/sidebar-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private sidebarService: SidebarServiceService) { }

  ngOnInit() {
  }

  navigate(event) {
    if (event.key === "Enter") {
      console.log(event);
      this.router.navigateByUrl("/search");
    }
  }

  goHome() {
    this.router.navigateByUrl("/home");
  }

  open() {
    this.sidebarService.openNav();
  }
  close() {
    this.sidebarService.closeNav();
  }
}
