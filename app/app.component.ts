import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { NewappComponent } from './newapp/newapp.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'app';

  @ViewChild(NewappComponent)
  private accChild : NewappComponent;

  val = ""
  ngAfterViewInit(){
   this.val = this.accChild.viewChildMethod()
  }
  ngOnInit(){
    
  }
  


}
