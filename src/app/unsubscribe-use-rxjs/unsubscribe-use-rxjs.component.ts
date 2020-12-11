import { Component, OnInit } from '@angular/core';
import { interval, Subject, Subscription } from 'rxjs';
import {
  map,
  delay,
  switchAll,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  first,
} from 'rxjs/operators';

@Component({
  selector: 'app-unsubscribe-use-rxjs',
  templateUrl: './unsubscribe-use-rxjs.component.html',
  styleUrls: ['./unsubscribe-use-rxjs.component.css'],
})
export class UnsubscribeUseRxjsComponent implements OnInit {
  subcriptionTake: Subscription;
  subcriptionTakeUntil: Subscription;
  subcriptionTakeWhile: Subscription;
  subcriptionFirst: Subscription;

  takeCount = 0;

  notifier = new Subject();
  takeUntilCount = 0;

  takeWhileCount = 0;

  takeFirstCount = 0;
  takeFirstValue = 0;

  constructor() {}

  ngOnInit(): void {
    console.clear();
    console.log('Unsubscribe Rxjs Demo');
    // Resolve problem with use take in Rxjs operator after 5 times subscript it auto unsubscribe
    this.subcriptionTake = interval(1000)
      .pipe(take(5))
      .subscribe((value) => {
        const printValue = `Print value with method rxjs.take ${value}`;
        this.takeCount++;
        console.log(printValue);
      });

    // Resolve problem with use takeUntil in Rxjs operator
    this.subcriptionTakeUntil = interval(1000)
      .pipe(takeUntil(this.notifier))
      .subscribe((value) => {
        const printValue = `Print value with method rxjs.takeUntil ${value}`;
        this.takeUntilCount++;
        console.log(printValue);
      });

    this.subcriptionTakeWhile = interval(1000)
      .pipe(takeWhile((value) => value < 7))
      .subscribe((value) => {
        const printValue = `Print value with method rxjs.takeWhile ${value}`;
        this.takeWhileCount++;
        console.log(printValue);
      });

    this.subcriptionFirst = interval(1000)
      .pipe(first((value) => value === 10))
      .subscribe((value) => {
        const printValue = `Print value with method rxjs.first ${value}`;
        this.takeFirstCount++;
        this.takeFirstValue = value;
        console.log(printValue);
      });
  }

  onClickSopWithTakeUntil(): void {
    this.notifier.next();
    this.notifier.complete();
  }
}
