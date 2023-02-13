import { PaymentsService } from './../../services/payments.service';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent {
  orders$ = this.ordersService.orders$;


  constructor(
    private ordersService: OrdersService,
    private paymentService: PaymentsService
  ) { }

  addOrder(order: HTMLInputElement) {

    if (order.value) {
      this.ordersService.addOrder(order.valueAsNumber);
      this.paymentService.updateBalance(1);
      order.value = '';
    }
  }
}
