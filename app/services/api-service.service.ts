import { Injectable } from '@angular/core';
import { HttpModule,Http,RequestOptions,Headers,Response } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ApiServiceService {

  headers = new Headers({'Content-Type': 'application/json'}); 
  options = new RequestOptions({ headers: this.headers });
  constructor(private http:Http) { }
  url;res:Observable<Response>;

  //Sign Up
  saveUser(data){
    console.log("Serve:",data)
    this.url = "http://localhost:3000/signup"
    this.http.post(this.url,data,this.options)
               .map(res => res.json)  
               .subscribe(res => console.log(res))
    }
  
  //Sign In
  getUserData(params){
    this.url="http://localhost:3000/signin/"+params.username;
    console.log(this.url);
    console.log("Called serveics");
    this.res = this.http.get(this.url);
    console.log(this.res)
  }
}
