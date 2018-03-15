//Required Modules
import { Component, OnInit,Output } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {FormsModule} from '@angular/forms';

//Services
import { AuthenticationService } from 'D:/timesheet/src/app/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  data : any;
  //Data-ngModel
  fname;lastname;contact;email;username;password;

  constructor(private api:AuthenticationService,
              private router:Router) { }
  ngOnInit() {
  }
 
  signUp(){
    this.data = {
      "first_name":this.fname,
      "last_name":this.lastname,
      "username":this.username,
      "password":this.password,
      "contact":this.contact,
      "email_id":this.email
    }
    this.api.saveUser(this.data);
    console.log("comp done")
    
    this.router.navigate([''])
  }

  reset(){
    this.fname="";
    this.lastname="";
    this.email="";
    this.password="";
    this.contact="";
    this.username="";
  }
}
