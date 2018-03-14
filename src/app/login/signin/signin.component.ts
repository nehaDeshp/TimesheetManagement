import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'D:/timesheet/src/app/services/api-service.service';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  username;password;params;errorMessage="";val:any;success="";session;

  notMatched:boolean = false;
  constructor(private data:ApiServiceService,
              private router:Router){

  }

  ngOnInit() {
    console.log(sessionStorage.getItem('id'));  
    this.errorMessage = "";
    this.success = this.data.success;
  }

  authenticate(){

    console.log(sessionStorage.getItem('id'));
    this.errorMessage="Invalid User";
    this.params={
      "username":this.username
    };
    this.data.getUserData(this.params)
        .subscribe(data => {
          this.val=data;
          if(this.val != null && this.val.password == this.password){
            sessionStorage.setItem('id',this.val._id);
            sessionStorage.setItem('name',this.val.username);
            this.router.navigate(['/profile',sessionStorage.getItem('name')]);
          }
          else{
            this.notMatched=true;
          }
    });
  }
}
