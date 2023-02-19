import {Injectable} from '@angular/core';

import {ProfileService} from "./profile.service";
import {OrdersService} from "./orders.service";
import {PaymentsService} from "./payments.service";
import {combineLatest} from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public customerAndBalance$ = combineLatest([
    this.paymentService.paymentBalance$,
    this.profileService.name$,
  ]).pipe(
    map(([balance, name]) => ({balance, name}))
  );

  customer$ = this.profileService.name$;
  orders$ = this.orderService.orders$;
  balance$ = this.paymentService.paymentBalance$;

  constructor(
    private profileService: ProfileService,
    private orderService: OrdersService,
    private paymentService: PaymentsService
  ) {
  }

  addOrder(order: number) {
    this.orderService.addOrder(order);
    this.paymentService.updateBalance(1);
  }

  donate(amount: number) {
    this.paymentService.updateBalance(amount);
  }
}
