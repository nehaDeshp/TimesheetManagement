import { Component, OnInit ,Input} from '@angular/core';
import {NewappComponent } from '../newapp/newapp.component';

@Component({
  selector: 'app-child-new-app',
  templateUrl: './child-new-app.component.html',
  styleUrls: ['./child-new-app.component.css'],
  inputs:['NewappComponent']
})
export class ChildNewAppComponent implements OnInit {

  constructor() { }
  data = '123';

  @Input() childInp : String;
  ngOnInit() {
  }

}
