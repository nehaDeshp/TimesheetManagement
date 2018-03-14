import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-newapp',
  templateUrl: './newapp.component.html',
  styleUrls: ['./newapp.component.css'],
})

export class NewappComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() data : String;
  hello = "helolo"

  newAppVariable = "This is me in new APP";
  pdata = "inside Parent new-app";
  msg:String
  public viewChildMethod(){
    return "Inside view Child";
  }

}
