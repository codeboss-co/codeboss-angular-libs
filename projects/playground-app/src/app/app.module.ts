import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoggerModule } from '@codeboss/logger-lib';
import { GenericTableModule } from '@codeboss/mat-generic-table';
//import { SimpleExampleGenericTableComponent } from './mat-generic-table/simple-example-generic-table.component';


@NgModule( {
    declarations: [
        AppComponent,

       // SimpleExampleGenericTableComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,

        LoggerModule.forRoot( { enableDebug: true } ),

        GenericTableModule
    ],
    providers: [],
    bootstrap: [AppComponent]
} )
export class AppModule {
}
