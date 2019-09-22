import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Task, subTask } from 'src/app/shared/models/task';

@Component({
  selector: 'simproman-sub-tasks',
  templateUrl: './sub-tasks.component.html',
  styleUrls: ['./sub-tasks.component.scss']
})
export class SubTasksComponent implements OnInit {

  @Input() subTasks:Array<subTask> = [];
  
  //localVariables
  isSubTasks:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if(Array.isArray(changes.subTasks.currentValue)){
      this.isSubTasks = this.subTasks.length > 0?true:false 
    }
  }

}
