# Angular Unsubscribe ways

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

## Development Unsubscibe for avoid Memory Leak in Angular
The problem happend when you forgot unsubscribe that cause the memory leak problem

### 1: Use Unsubcribe with method unsubscribe()
```
  ngOnDestroy(): void {
    this.subcription$.unsubscribe();
  }
```

### 2: Use Unsubcribe with operator in Rxjs

#### 2.a Rxjs.take(n)
```
  this.subcriptionTake = interval(1000)
      .pipe(take(5))
      .subscribe((value) => {
        ...
      });
```
#### 2.b Rxjs.takeUntil()
```
  // Declare
  notifier = new Subject();

  ...
  // use takeUntil
  this.subcriptionTakeUntil = interval(1000)
    .pipe(takeUntil(this.notifier))
    .subscribe((value) => {
      ...
    });
  ...
  // Notify stop usually we put it on ngOnDestroy()
  onClickSopWithTakeUntil() {
    this.notifier.next();
    this.notifier.complete();
  }
```
#### 2.c Rxjs.takeWhile() Subcription value until value >= 7
```
  this.subcriptionTakeWhile = interval(1000)
      .pipe(takeWhile((value) => value < 7))
      .subscribe((value) => {
        ...
      });
```
#### 2.d Rxjs.takeWhile() Only subcription one time when value = 10
```
    this.subcriptionFirst = interval(1000)
      .pipe(first((value) => value === 10))
      .subscribe((value) => {
        ...
      });
```

### 3: Use the aysn pipe with allow auto subscribe and Unsubscribe
```
  in *.ts
  values$: Observable<number>;

  ngOnInit(): void {
    this.values$ = interval(1000);
  }

  in *.html
  <h2  *ngIf="values$ | async as values">Running: <span>{{values}}</span></h2>
```
### 4: Allow auto Unsubscribe by overwrite ngOnDestroy by use prototype.ngOnDestroy

#### Steps
1. Overwrite ngOnDestroy
```
export function AutoUnsubscribe(constructor) {
  const original = constructor.prototype.ngOnDestroy;

  constructor.prototype.ngOnDestroy = function () {
    for (let prop in this) {
      const property = this[prop];
      if (property && typeof property.unsubscribe === 'function') {
        property.unsubscribe();
      }
    }
    original &&
      typeof original === 'function' &&
      original.apply(this, arguments);
  };
}
```
2. Apply in Component
For apply you must:
  - Declare subcription1: Subscription;
  - Assign subscribe to subcription1
```
  subcription4: Subscription;

  this.subcription1 = interval(1000).subscribe((value) => {
      const printValue = `Print value with auto unSubscribe1 ${value}`;
      console.log(printValue);
    });
```
