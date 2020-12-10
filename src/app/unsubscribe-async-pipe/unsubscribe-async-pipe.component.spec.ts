import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribeAsyncPipeComponent } from './unsubscribe-async-pipe.component';

describe('UnsubscribeAsyncPipeComponent', () => {
  let component: UnsubscribeAsyncPipeComponent;
  let fixture: ComponentFixture<UnsubscribeAsyncPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsubscribeAsyncPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsubscribeAsyncPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
