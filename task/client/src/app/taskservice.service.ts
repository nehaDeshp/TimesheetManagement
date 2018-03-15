import { Injectable } from '@angular/core';

import { HttpModule,Http,RequestOptions,Headers,Response } from '@angular/http';

import {Observable} from 'rxjs';

import 'rxjs/add/operator/catch';

import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';





@Injectable()

export class taskserviceService {

  editDetails:any;


  headers = new Headers({'Content-Type': 'application/json'}); 

  options = new RequestOptions({ headers: this.headers });

  constructor(private http:Http) { }

  url;res:Observable<Response>;


  //New Task 

  saveTask(data){

    console.log("Serve:",data)

    this.url = "http://localhost:3000/api/newtasks"

    this.http.post(this.url,data,this.options)

               .map(res => res.json)  

               .subscribe(res => console.log("RES",res));
  }



  displayTask() : Observable<Comment[]> {
    this.url = "http://localhost:3000/api/gettasks"
    // ...using get request
    return this.http.get(this.url)
                   // ...and calling .json() on the response to return data
                    .map((res:Response) => res.json())
                    //...errors if any
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

}

  displayOneTask(id) : Observable<Comment[]> {
    this.url = "http://localhost:3000/api/gettasks/id/:id"
    // ...using get request
    return this.http.get(this.url)
                  // ...and calling .json() on the response to return data
                    .map((res:Response) => res.json())
                    //...errors if any
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  
  editNTask(data){

    console.log("Serve:",data)

    this.url = "http://localhost:3000/api/edittasks/:id";

    this.http.put(this.url,data,this.options)

               .map(res => res.json)  

               .subscribe(res => console.log("RES",res));
  }
}