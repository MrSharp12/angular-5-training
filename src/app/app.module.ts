import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';//this is how angular knows we created a new component


@NgModule({//angular decorator
  declarations: [
    AppComponent,
    ServerComponent,//let's angular know we created a new element
    ServersComponent//added automatically by the cli
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
