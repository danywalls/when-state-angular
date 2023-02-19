import {PaymentsService} from './../../services/payments.service';
import {Component} from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent {

  balance$ = this.paymentService.paymentBalance$;

  constructor(private paymentService: PaymentsService) {

  }

  addBalance(balance: HTMLInputElement) {
    this.paymentService.addBalance(balance.valueAsNumber);
  }

}
