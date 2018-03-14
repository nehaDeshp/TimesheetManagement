import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { NewtaskComponent } from './newtask/newtask.component';
import { taskserviceService } from './taskservice.service';
import {Http,HttpModule} from '@angular/http';
import { ViewTaskComponent } from './view-task/view-task.component';
import { AppRoutingModule } from './/app-routing.module';
import {RouterModule} from '@angular/router';


//Components




const routes = [

  {path: 'api/newtasks',component:NewtaskComponent},
  {path: 'api/newtasks/:id',component:NewtaskComponent},

  {path: 'api/gettasks',component:ViewTaskComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    NewtaskComponent,
    ViewTaskComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(routes), AppRoutingModule
  ],
  providers: [taskserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
