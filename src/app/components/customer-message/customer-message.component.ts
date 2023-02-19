import {Component} from '@angular/core';
import {AppService} from "../../services/app.service";


@Component({
  selector: 'app-customer-message',
  templateUrl: './customer-message.component.html',
  styleUrls: ['./customer-message.component.css']
})
export class CustomerMessageComponent {

  public customerInfo$ = this.appService.customerAndBalance$;

  constructor(private appService: AppService) {
  }
}
