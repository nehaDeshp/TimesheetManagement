//Required Modules
import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

//Services
import { AuthenticationService } from 'D:/timesheet/src/app/services/authentication.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

//Variable Initialisation
  username:String;
  password:String;
  params:any;
  responseStatusCode:Number;
  responseData:any;
  noUser:Boolean = false;
  constructor(private authenticationService:AuthenticationService,
              private route:Router)
  { }

  ngOnInit() {

  }
  authenticate(){
    this.authenticationService.getUserData(this.username,this.password)
      .subscribe(data => {
        this.responseStatusCode = data.status;
        this.responseData = data.json();
      },
      error=>{
        console.log("Error");
    });
    if(this.responseStatusCode == 200 && this.responseData != null){
      console.log("hi");
      this.route.navigate(['/profile'])
    }
    else{
      this.noUser = true;
    }
  }
}
