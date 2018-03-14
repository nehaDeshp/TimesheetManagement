import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { SignupComponent } from './login/signup/signup.component';

//Services
import { ApiServiceService } from './services/api-service.service'

//Http
import {HttpModule} from '@angular/http';

//Charts
import { ChartsModule } from 'ng2-charts';

//Components
import { SigninComponent } from './login/signin/signin.component';
import { LoginComponent } from './login/login.component';
import { ReportsComponent } from './reports/reports.component';

const routes = [
  {path: 'signup',component:SignupComponent},
  {path: 'signin',component:SigninComponent},
  {path: 'reports',component:ReportsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    LoginComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(routes),HttpModule,
    ChartsModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
