import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribeUseDecoratorAutomateComponent } from './unsubscribe-use-decorator-automate.component';

describe('UnsubscribeUseDecoratorAutomateComponent', () => {
  let component: UnsubscribeUseDecoratorAutomateComponent;
  let fixture: ComponentFixture<UnsubscribeUseDecoratorAutomateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsubscribeUseDecoratorAutomateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsubscribeUseDecoratorAutomateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
