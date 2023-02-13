import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  private paymentSubject = new BehaviorSubject<number>(0);
  public paymentBalance$ = this.paymentSubject.asObservable()

  public updateBalance(balance: number) {
    const totalBalance = this.paymentSubject.getValue() - balance
    this.paymentSubject.next(totalBalance);
  }

  public addBalance(balance: number) {
    this.paymentSubject.next(balance);
  }

}
