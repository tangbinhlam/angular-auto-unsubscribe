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
