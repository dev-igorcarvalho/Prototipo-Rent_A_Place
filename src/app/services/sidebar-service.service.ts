import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarServiceService {

  constructor() { }

  
  openNav() {
    console.warn("open side bar");
    document.getElementById('mySidenav').style.width = '80%';
    document.getElementById('main').style.marginLeft = '40%';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
  }
  closeNav() {
    console.warn("close side bar");
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    document.body.style.backgroundColor = 'white';
  }
}
