import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NewappComponent } from './newapp/newapp.component';
import { ChildNewAppComponent } from './child-new-app/child-new-app.component';


@NgModule({
  declarations: [
    AppComponent,
    NewappComponent,
    ChildNewAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
