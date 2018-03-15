import { Component, OnInit } from '@angular/core';
import { taskserviceService } from '../taskservice.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
  task:any[];
  x:any;
  etask:any[];
  constructor(private api:taskserviceService) { }
  loadComments() {
 this.api.displayTask().subscribe (
      task => this.task=task, //Bind to view
      err => {
          // Log errors if any
          console.log(err);
      });
    }
  
  ngOnInit() {
      // Load comments
      this.loadComments()

  }
  editTask(x){
    // this.api.displayOneTask(x._id).subscribe (
    //   etask => this.etask=etask, //Bind to view
      
    //   err => {
    //       // Log errors if any
    //       console.log(err);
    //   }
    // );
    console.log(x); 
    this.api.editDetails=x;
  }
}
