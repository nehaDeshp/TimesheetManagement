import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name;
  constructor() { }

  ngOnInit() {
    console.log("Session",sessionStorage);
    this.name = sessionStorage.name;
  }

  signout(){
    sessionStorage.clear();
  }

}
