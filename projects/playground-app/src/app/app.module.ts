import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoggerModule } from '@my/logger-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    LoggerModule.forRoot({ enableDebug: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
