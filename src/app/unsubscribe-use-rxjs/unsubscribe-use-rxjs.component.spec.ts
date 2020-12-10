import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribeUseRxjsComponent } from './unsubscribe-use-rxjs.component';

describe('UnsubscribeUseRxjsComponent', () => {
  let component: UnsubscribeUseRxjsComponent;
  let fixture: ComponentFixture<UnsubscribeUseRxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsubscribeUseRxjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsubscribeUseRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
