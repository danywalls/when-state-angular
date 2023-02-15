import {PaymentsService} from '../../services/payments.service';
import {Component} from '@angular/core';
import {OrdersService} from 'src/app/services/orders.service';
import {startWith} from 'rxjs/operators';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent {
  orders$ = this.ordersService.orders$;
  currentBalance = this.paymentService.paymentBalance$.pipe(startWith(0))


  constructor(
    private ordersService: OrdersService,
    private paymentService: PaymentsService
  ) {

  }

  addOrder(order: HTMLInputElement) {
    this.ordersService.addOrder(order.valueAsNumber);
    this.paymentService.updateBalance(1);
    order.value = '';
  }
}
