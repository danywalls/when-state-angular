import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  orders$ = this.ordersService.orders$;

  constructor(private ordersService: OrdersService) {

  }

  addOrder(order: HTMLInputElement) {
    if (order.value) {
      this.ordersService.addOrder(order.valueAsNumber);
      order.value = ""
    }

  }
}
