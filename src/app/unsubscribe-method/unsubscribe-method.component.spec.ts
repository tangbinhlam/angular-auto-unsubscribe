import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribeMethodComponent } from './unsubscribe-method.component';

describe('UnsubscribeMethodComponent', () => {
  let component: UnsubscribeMethodComponent;
  let fixture: ComponentFixture<UnsubscribeMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsubscribeMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsubscribeMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
