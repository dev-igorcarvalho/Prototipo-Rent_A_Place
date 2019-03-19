import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.master = false;
    this.visa = false;
    this.discover = false;
    this.money = false;
    this.stripe = false;
    this.dinners = false;
    this.paypal = false;
    this.amex = false;
  }

  master: boolean;
  visa: boolean;
  discover: boolean;
  money: boolean;
  stripe: boolean;
  amex: boolean;
  dinners: boolean;
  paypal: boolean;

  selection(type: string) {
    switch (type) {
      case 'master': {
        this.master = !this.master;
        this.visa = false;
        this.discover = false;
        this.money = false;
        this.stripe = false;
        this.dinners = false;
        this.paypal = false;
        this.amex = false;
        break;
      }
      case 'visa': {
        this.master = false;
        this.visa = !this.visa;
        this.discover = false;
        this.money = false;
        this.stripe = false;
        this.dinners = false;
        this.paypal = false;
        this.amex = false;
        break;
      }
      case 'discover': {
        this.master = false;
        this.visa = false;
        this.discover = !this.discover;
        this.money = false;
        this.stripe = false;
        this.dinners = false;
        this.paypal = false;
        this.amex = false;
        break;
      }
      case 'money': {
        this.master = false;
        this.visa = false;
        this.discover = false;
        this.money = !this.money;
        this.stripe = false;
        this.dinners = false;
        this.paypal = false;
        this.amex = false;
        break;
      }
      case 'stripe': {
        this.master = false;
        this.visa = false;
        this.discover = false;
        this.money = false;
        this.stripe = !this.stripe;
        this.dinners = false;
        this.paypal = false;
        this.amex = false;
        break;
      }
      case 'dinners': {
        this.master = false;
        this.visa = false;
        this.discover = false;
        this.money = false;
        this.stripe = false;
        this.dinners = !this.dinners;
        this.paypal = false;
        this.amex = false;
        break;
      }
      case 'paypal': {
        this.master = false;
        this.visa = false;
        this.discover = false;
        this.money = false;
        this.stripe = false;
        this.dinners = false;
        this.paypal = !this.paypal;
        this.amex = false;
        break;
      }
      case 'amex': {
        this.master = false;
        this.visa = false;
        this.discover = false;
        this.money = false;
        this.stripe = false;
        this.dinners = false;
        this.paypal = false
        this.amex = !this.amex;
        break;
      }
      default: {
        //statements; 
        break;
      }
    }

  }

}
