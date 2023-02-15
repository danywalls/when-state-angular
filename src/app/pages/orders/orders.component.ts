import {PaymentsService} from '../../services/payments.service';
import {Component, OnDestroy} from '@angular/core';
import {OrdersService} from 'src/app/services/orders.service';
import {takeWhile, tap} from 'rxjs/operators';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnDestroy {
  orders$ = this.ordersService.orders$;
  currentBalance = 0;
  private alive = true;

  constructor(
    private ordersService: OrdersService,
    private paymentService: PaymentsService
  ) {
    this.registerListeners();
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

  registerListeners(): void {
    this.paymentService.paymentBalance$
      .pipe(
        takeWhile(() => this.alive),
        tap((value: number) => {
          this.currentBalance = value
        })
      )
      .subscribe()
  }

  addOrder(order: HTMLInputElement) {
    const validPurchase = order.value && this.currentBalance >= 0
    if (validPurchase) {
      this.ordersService.addOrder(order.valueAsNumber);
      this.paymentService.updateBalance(1);
      order.value = '';
    }
  }
}
