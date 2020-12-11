import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UnsubscribeMethodComponent } from './unsubscribe-method/unsubscribe-method.component';
import { UnsubscribeAsyncPipeComponent } from './unsubscribe-async-pipe/unsubscribe-async-pipe.component';
import { UnsubscribeUseRxjsComponent } from './unsubscribe-use-rxjs/unsubscribe-use-rxjs.component';
import { UnsubscribeUseDecoratorAutomateComponent } from './unsubscribe-use-decorator-automate/unsubscribe-use-decorator-automate.component';
import { Router, RouterModule, Routes } from '@angular/router';

const routers: Routes = [
  {
    path: 'uns-method',
    component: UnsubscribeMethodComponent,
  },
  {
    path: 'uns-rxjs',
    component: UnsubscribeUseRxjsComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    UnsubscribeMethodComponent,
    UnsubscribeAsyncPipeComponent,
    UnsubscribeUseRxjsComponent,
    UnsubscribeUseDecoratorAutomateComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routers)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
