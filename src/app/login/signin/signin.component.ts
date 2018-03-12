import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'D:/timesheet/src/app/services/api-service.service';
import {FormsModule} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  username;password;params;
  constructor(private data:ApiServiceService){

  }

  ngOnInit() {
  }

  authenticate(){
    this.params={
      "username":this.username,
    }
    this.data.getUserData(this.params);
  }
}
