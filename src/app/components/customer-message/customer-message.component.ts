import {Component} from '@angular/core';
import {ProfileService} from "../../services/profile.service";
import {PaymentsService} from "../../services/payments.service";
import {map} from 'rxjs/operators';
import {combineLatest} from 'rxjs/internal/observable/combineLatest';

@Component({
  selector: 'app-customer-message',
  templateUrl: './customer-message.component.html',
  styleUrls: ['./customer-message.component.css']
})
export class CustomerMessageComponent {

  public customerInfo$ = combineLatest([
    this.paymentService.paymentBalance$,
    this.profileService.name$,
  ]).pipe(
    map(([balance, name]) => ({balance, name}))
  );

  constructor(
    private profileService: ProfileService,
    private paymentService: PaymentsService
  ) {
  }
}
