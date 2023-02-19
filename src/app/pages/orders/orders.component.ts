import {Component} from '@angular/core';
import {AppService} from "../../services/app.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent {


  balance$ = this.appService.balance$

  constructor(
    private appService: AppService
  ) {

  }

  addOrder(order: HTMLInputElement) {
    this.appService.addOrder(order.valueAsNumber)
    order.value = '';
  }
}
