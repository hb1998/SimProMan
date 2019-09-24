import { Component, OnInit } from '@angular/core';
import { subTask } from 'src/app/shared/models/task';
import {  FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'simproman-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.scss']
})
export class AddTaskModalComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private MatdialogRef:MatDialogRef<AddTaskModalComponent>
  ) { }

  addTaskForm = this.fb.group({
    name:['',Validators.required],
    description:'',
    priority:'low',
    DrT:'time',
    date:'',
    time:''
    // subTasks:this.fb.array([
    //   this.fb.group({
    //     name:"Go to work",
    //     done:false
    //   })
    // ])
    
  })
  subTasks:Array<subTask> = [
    {
      name:"Go to work",
      done:false
    }
  ]

  timeUnits = ["m","h","d"]

  ngOnInit() {
  }
  addSubTask(){
    this.subTasks.push(
      {
        name:"Go to work",
        done:false
      }
      
    )

  }
  deleteSubTask(index){
    this.subTasks.splice(index,1)
  }
  addTask(){

  }
  cancel(){
    this.MatdialogRef.close()
  }

}
