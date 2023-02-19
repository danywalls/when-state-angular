import {Component} from '@angular/core';
import {AppService} from "../../services/app.service";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {

  orders$ = this.appService.orders$;

  constructor(private appService: AppService) {
  }

}
