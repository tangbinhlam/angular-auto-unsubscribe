import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-unsubscribe-method',
  templateUrl: './unsubscribe-method.component.html',
  styleUrls: ['./unsubscribe-method.component.css'],
})
export class UnsubscribeMethodComponent implements OnInit, OnDestroy {
  subcription$: Subscription;

  constructor() {}

  ngOnInit(): void {
    console.clear();
    console.log('Unsubscribe Method Demo');
    this.subcription$ = interval(1000).subscribe((value) => {
      console.log(`Print ${value}`);
    });
  }

  ngOnDestroy(): void {
    this.subcription$.unsubscribe();
    console.log(`After call unsubscribe() method `);
  }
}
