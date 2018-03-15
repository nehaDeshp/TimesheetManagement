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

//Services
import { ApiServiceService } from './services/api-service.service';

//Http
import {HttpModule} from '@angular/http';

//Charts
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';

const routes = [
  {path: '', component:SigninComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'reports',component:ReportsComponent},
  {path: 'profile/:username',component:DashboardComponent},
  {path: 'login',component:LoginComponent}
]

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
    BrowserModule,FormsModule,RouterModule.forRoot(routes),HttpModule,
    ChartsModule
  ],
  providers: [
    ApiServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
