import {Injectable} from '@angular/core';

import {ProfileService} from "../../services/profile.service";
import {OrdersService} from "../../services/orders.service";
import {PaymentsService} from "../../services/payments.service";
import {map} from 'rxjs/internal/operators/map';
import {combineLatest} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public customerInfo$ = combineLatest([
    this.paymentService.paymentBalance$,
    this.orderService.orders$,
    this.profileService.name$,
  ]).pipe(
    map(([balance, orders, profileName]) => ({balance, orders, profileName}))
  );

  constructor(
    private profileService: ProfileService,
    private orderService: OrdersService,
    private paymentService: PaymentsService
  ) {
  }
}
