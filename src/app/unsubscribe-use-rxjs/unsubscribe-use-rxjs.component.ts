import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
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

  takeItems = [];
  takeUntilItems = [];

  constructor() {}

  ngOnInit(): void {
    console.clear();
    console.log('Unsubscribe Rxjs Demo');
    // Resolve problem with use take in Rxjs operator after 5 times subscript it auto unsubscribe
    this.subcriptionTake = interval(1000)
      .pipe(take(5))
      .subscribe((value) => {
        this.takeItems.push(`Print value with method rxjs.take ${value}`);
      });

    // this.subcriptionTake = interval(1000).subscribe((value) => {
    //   console.log(`Print value with method rxjs.takeUntil ${value}`);
    // });
    /*
    this.subcriptionTake = interval(1000).subscribe((value) => {
      console.log(`Print value with method rxjs.takeWhile ${value}`);
    });
    this.subcriptionTake = interval(1000).subscribe((value) => {
      console.log(`Print value with method rxjs.first ${value}`);
    });
    */
  }
}
