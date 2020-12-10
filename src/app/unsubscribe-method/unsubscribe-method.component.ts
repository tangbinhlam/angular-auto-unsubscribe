import { Component, OnInit } from '@angular/core';
import { interval, Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-unsubscribe-method',
  templateUrl: './unsubscribe-method.component.html',
  styleUrls: ['./unsubscribe-method.component.css'],
})
export class UnsubscribeMethodComponent implements OnInit {
  subcription$: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.subcription$ = interval(1000).subscribe((value) => {
      console.log(`Print ${value}`);
    });
  }
}
