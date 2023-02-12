import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private orderSubject = new BehaviorSubject<number[]>([]);
  public orders$ = this.orderSubject.asObservable()

  public updateBalance(orderId: number) {
    const orders = [...this.orderSubject.value, orderId]
    this.orderSubject.next(orders);
  }
}
