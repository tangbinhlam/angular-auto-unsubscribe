import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-unsubscribe-async-pipe',
  templateUrl: './unsubscribe-async-pipe.component.html',
  styleUrls: ['./unsubscribe-async-pipe.component.css'],
})
export class UnsubscribeAsyncPipeComponent implements OnInit {
  values$: Observable<number>;

  constructor() {}

  ngOnInit(): void {
    console.clear();
    console.log('Unsubscribe with use Async Pipe');
    this.values$ = interval(1000);
  }
}
