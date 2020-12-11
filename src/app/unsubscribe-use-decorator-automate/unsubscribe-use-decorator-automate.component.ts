import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { AutoUnsubscribe } from '../utils/auto-unsubscribe';
@Component({
  selector: 'app-unsubscribe-use-decorator-automate',
  templateUrl: './unsubscribe-use-decorator-automate.component.html',
  styleUrls: ['./unsubscribe-use-decorator-automate.component.css'],
})
@AutoUnsubscribe
export class UnsubscribeUseDecoratorAutomateComponent implements OnInit {
  subcription1: Subscription;
  subcription2: Subscription;
  subcription3: Subscription;
  subcription4: Subscription;

  constructor() {}

  ngOnInit(): void {
    console.clear();
    console.log('Unsubscribe Rxjs Demo');
    this.subcription1 = interval(1000).subscribe((value) => {
      const printValue = `Print value with auto unSubscribe1 ${value}`;
      console.log(printValue);
    });
    this.subcription2 = interval(1000).subscribe((value) => {
      const printValue = `Print value with auto unSubscribe2 ${value}`;
      console.log(printValue);
    });
    this.subcription3 = interval(1000).subscribe((value) => {
      const printValue = `Print value with auto unSubscribe3 ${value}`;
      console.log(printValue);
    });
    this.subcription4 = interval(1000).subscribe((value) => {
      const printValue = `Print value with auto unSubscribe4 ${value}`;
      console.log(printValue);
    });
  }
}
