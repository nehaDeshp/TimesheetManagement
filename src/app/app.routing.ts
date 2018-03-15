import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './login/signin/signin.component';
import { LoginComponent } from './login/login.component';
import { ReportsComponent } from './reports/reports.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './login/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';

const routes:Routes = [
    {path: '', component:SigninComponent},
    {path: 'signup',component:SignupComponent},
    {path: 'reports',component:ReportsComponent},
    {path: 'profile',component:DashboardComponent},
    {path: 'login',component:LoginComponent},
    {path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);
