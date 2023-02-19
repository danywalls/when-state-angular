import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  private paymentSubject = new BehaviorSubject<number | null>(null);
  public paymentBalance$ = this.paymentSubject.asObservable()

  public updateBalance(balance: number) {
    const currentBalance = this.paymentSubject.getValue();
    if (currentBalance) {
      const totalBalance = currentBalance - balance;
      this.paymentSubject.next(totalBalance);
    }
  }

  public addBalance(balance: number) {
    this.paymentSubject.next(balance);
  }

}
