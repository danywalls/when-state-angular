import {Component} from '@angular/core';
import {AppService} from "../../services/app.service";

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent {

  balance$ = this.appService.balance$

  constructor(
    private appService: AppService
  ) {

  }

  donate(amount: HTMLInputElement) {
    this.appService.donate(amount.valueAsNumber)
    amount.value = '1';
  }

}
