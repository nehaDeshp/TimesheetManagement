import { Component, ViewChild } from '@angular/core';
import { SigninComponent } from './login/signin/signin.component';
import {Constants} from './services/global';


 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  constructor(private constants:Constants){
    
  }


}
