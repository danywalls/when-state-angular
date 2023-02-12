import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { OrdersService } from 'src/app/services/orders.service';
import { PaymentsService } from 'src/app/services/payments.service';
import { ProfileService } from 'src/app/services/profile.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  customerStatus$ = combineLatest([
    this.paymentService.paymentBalance$,
    this.orderService.orders$,
    this.profileService.name$
  ]).pipe(
    map(([balance, orders, profileName]) => ({ balance, orders, profileName }))
  )

  constructor(
    private profileService: ProfileService,
    private orderService: OrdersService,
    private paymentService: PaymentsService
  ) { }


}
