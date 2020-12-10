# AngularAutoUnsubscribe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

## Development Unsubscibe for avoid Memory Leak in Angular
The problem happend when you forgot unsubscribe that cause the memory leak problem

### 1: Use Unsubcribe with method unsubscribe()
```
  ngOnDestroy(): void {
    this.subcription$.unsubscribe();
  }
```
