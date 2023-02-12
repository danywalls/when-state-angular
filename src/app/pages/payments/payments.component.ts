import { PaymentsService } from './../../services/payments.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent {

  balance$ = this.paymentService.paymentBalance$;

  constructor(private paymentService: PaymentsService) {

  }

  updateBalance(balance: string) {
    this.paymentService.updateBalance(+balance);
  }

}
