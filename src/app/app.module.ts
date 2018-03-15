import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { Http, RequestOptions } from '@angular/http';

//Components
import { SigninComponent } from './login/signin/signin.component';
import { LoginComponent } from './login/login.component';
import { ReportsComponent } from './reports/reports.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './login/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
//Services
import { AuthenticationService } from './services/authentication.service';

//Http
import {HttpModule} from '@angular/http';

//Charts
import { ChartsModule } from 'ng2-charts';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    LoginComponent,
    ReportsComponent,
    DashboardComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,
    ChartsModule,routing
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
