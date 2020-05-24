import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToastMessageModule } from 'toast-message';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ToastMessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
