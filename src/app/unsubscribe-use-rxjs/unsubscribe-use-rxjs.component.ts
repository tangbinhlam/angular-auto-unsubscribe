import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

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

  constructor() {}

  ngOnInit(): void {
    console.clear();
    console.log('Unsubscribe Rxjs Demo');
    this.subcriptionTake = interval(1000).subscribe((value) => {
      console.log(`Print value with method rxjs.take ${value}`);
    });
    this.subcriptionTake = interval(1000).subscribe((value) => {
      console.log(`Print value with method rxjs.takeUntil ${value}`);
    });
    this.subcriptionTake = interval(1000).subscribe((value) => {
      console.log(`Print value with method rxjs.takeWhile ${value}`);
    });
    this.subcriptionTake = interval(1000).subscribe((value) => {
      console.log(`Print value with method rxjs.first ${value}`);
    });
  }
}
