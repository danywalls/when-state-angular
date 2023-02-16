import {Component} from '@angular/core';
import {OrdersService} from "../../services/orders.service";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {

  orders$ = this.ordersService.orders$;

  constructor(private ordersService: OrdersService) {
  }

}
