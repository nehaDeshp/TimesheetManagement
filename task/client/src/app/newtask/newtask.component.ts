import { Component, OnInit } from '@angular/core';

import { taskserviceService } from '../taskservice.service';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})
export class NewtaskComponent implements OnInit {

    data : any;
  
    //Data-ngModel
  
   title;Duration;Deadline;activityType;description;pactivityType;currentstatus;responsible;assignedTo;NewlinksContacts;NewlinksCompany;NewlinksProjects;NewTasksattachments;taskStatus
  
    constructor(private api:taskserviceService) {
      console.log("new Task",this.api.editDetails);
      if(this.api.editDetails!= null){
      this.title=this.api.editDetails.title;
      this.Duration=this.api.editDetails.Duration;
      this.Deadline=this.api.editDetails.Deadline;
      this.activityType=this.api.editDetails.activityType;
      this.description=this.api.editDetails.description;
      this.pactivityType=this.api.editDetails.pactivityType;
      this.currentstatus=this.api.editDetails.currentstatus;
      this.responsible=this.api.editDetails.responsible;
      this.assignedTo=this.api.editDetails.assignedTo;
      this.NewlinksContacts=this.api.editDetails.NewlinksContacts;
      this.NewlinksProjects=this.api.editDetails.NewlinksProjects;
      this.NewlinksProjects=this.api.editDetails.NewlinksProjects;
      this.NewTasksattachments=this.api.editDetails.NewTasksattachments;
      this.taskStatus=this.api.editDetails.taskStatus;
     }}
  
    ngOnInit() {
  
    }
  
   
  
    addTask(){
  
      console.log("inside");
  
      this.data = {

        "title":this.title,
	
	      // "Duration":this.Duration,
	
        // "Deadline":this.Deadline,

        "activityType":this.activityType,

        "description":this.description,

        "pactivityType":this.pactivityType,
        
        "currentstatus":this.currentstatus,

        "responsible":this.responsible,
        
        "assignedTo":this.assignedTo,

        "NewlinksContacts":this.NewlinksContacts,
        "NewlinksCompany" :this.NewlinksCompany,
        "NewlinksProjects":this.NewlinksProjects,
        
        "NewTasksattachments":this.NewTasksattachments,

        "taskStatus":this.taskStatus
  
      }
  
      console.log("Comp",this.data);
  
      this.api.saveTask(this.data);
  
    }

    editTask(x){
  
      console.log("inside");
  
    
        console.log(x);
        this.title=this.api.editDetails.title;
        
	
	      // "Durat ion":this.Duration,
	
        // "Deadline":this.Deadline,

        // "activityType":this.activityType,

        // "description":this.description,

        // "pactivityType":this.pactivityType,
        
        // "currentstatus":this.currentstatus,

        // "responsible":this.responsible,
        
        // "assignedTo":this.assignedTo,

        // "NewlinksContacts":this.NewlinksContacts,
        // "NewlinksCompany" :this.NewlinksCompany,
        // "NewlinksProjects":this.NewlinksProjects,
        
        // "NewTasksattachments":this.NewTasksattachments,

        // "taskStatus":this.taskStatus
  
  
  
      console.log("Comp",this.data);
  
      
  
    }
  
  }

