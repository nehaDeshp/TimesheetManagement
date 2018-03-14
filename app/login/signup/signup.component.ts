import { Component, OnInit,Output } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ApiServiceService } from 'D:/timesheet/src/app/services/api-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  data : any;
  //Data-ngModel
  fname;lname;contact;email;username;password;

  constructor(private api:ApiServiceService) { }
  ngOnInit() {
  }
 
  signUp(){
    console.log("inside");
    this.data = {
      "first_name":this.fname,
      "last_name":this.lname,
      "username":this.username,
      "password":this.password,
      "contact":this.contact,
      "email_id":this.email
    }
    console.log(this.data);
    this.api.saveUser(this.data);
  }
}
