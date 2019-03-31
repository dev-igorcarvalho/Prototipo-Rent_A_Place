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
    window.addEventListener('scroll', this.scroll, true);
  }

  prevScrollpos = window.pageYOffset;

  scroll = (): void => {
    let currentScrollPos = window.pageYOffset;
    // console.log('the prev scrol is - ' + this.prevScrollpos + ' , the current scroll is - ' + currentScrollPos);

    if (this.prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
      // console.log("if");
    } else {
      document.getElementById("navbar").style.top = "-65px";
      // console.log("else");
    }
    this.prevScrollpos = currentScrollPos;

  };

  navigate(event) {
    if (event.key === "Enter") {
      console.log(event);
      this.router.navigateByUrl("/search");
    }
  }

  goHome() {
    this.router.navigateByUrl("/home");
  }

  goTo(url: string) {
    this.router.navigateByUrl(url);
  }

  open() {
    this.sidebarService.openNav();
  }
  close() {
    this.sidebarService.closeNav();
  }
}
