import { Injectable } from '@angular/core';
import { HttpModule,Http,RequestOptions,Headers,Response } from '@angular/http';
import {Observable} from 'rxjs';
import { AuthHttp } from 'angular2-jwt-session';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AuthenticationService {

  headers = new Headers({'Content-Type': 'application/json'}); 
  options = new RequestOptions({ headers: this.headers });
  constructor(private http:Http) { }
  url;res:Observable<Response>;success="";params;

  //Sign Up
  saveUser(data){
    console.log("Serve:",data)
    this.url = "http://localhost:3000/signup"
    alert(this.url+""+data.json);
    this.http.post(this.url,data,this.options)
               .map(res => res.json)  
               .subscribe(res => console.log(res));
    alert("Done")
    this.success = "User created sucessfully";
    }
  
  //Sign In
  getUserData(username,password){
    this.params={
        "username":username,
        "password":password
    };
    this.url="http://localhost:3000/signin";
    return this.http.post(this.url,this.params)
             .map(res => res);
  }
}
