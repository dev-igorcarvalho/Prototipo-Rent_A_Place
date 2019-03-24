import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  constructor(private router: Router) { }

  navigate(id: number) {
    console.warn(id);
    let redirectTO = '/place/'+id;
    this.router.navigateByUrl(redirectTO);
  }

  proceedCheckout(id: number) {
    console.warn(id);
    let redirectTO = '/checkout/'+id;
    // this.router.navigateByUrl(redirectTO);
    
    this.router.navigate( [redirectTO ], {fragment: 'start'});
  }

  goTO(url: string){
    this.router.navigateByUrl(url);
  }
}
