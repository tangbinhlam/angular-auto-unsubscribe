import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UnsubscribeMethodComponent } from './unsubscribe-method/unsubscribe-method.component';
import { UnsubscribeAsyncPipeComponent } from './unsubscribe-async-pipe/unsubscribe-async-pipe.component';
import { UnsubscribeUseRxjsComponent } from './unsubscribe-use-rxjs/unsubscribe-use-rxjs.component';
import { UnsubscribeUseDecoratorAutomateComponent } from './unsubscribe-use-decorator-automate/unsubscribe-use-decorator-automate.component';

@NgModule({
  declarations: [
    AppComponent,
    UnsubscribeMethodComponent,
    UnsubscribeAsyncPipeComponent,
    UnsubscribeUseRxjsComponent,
    UnsubscribeUseDecoratorAutomateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
