import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Task, SubTask } from 'src/app/shared/models/task';

@Component({
  selector: 'simproman-sub-tasks',
  templateUrl: './sub-tasks.component.html',
  styleUrls: ['./sub-tasks.component.scss']
})
export class SubTasksComponent implements OnInit,OnChanges {

  @Input() subTasks: Array<SubTask> = [];

  // localVariables
  isSubTasks = false;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (Array.isArray(changes.subTasks.currentValue)) {
      this.isSubTasks = this.subTasks.length > 0 ? true : false;
    }
  }

}
