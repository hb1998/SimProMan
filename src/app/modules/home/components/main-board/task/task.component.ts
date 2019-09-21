import { Component, OnInit, Input, SimpleChanges, Output } from '@angular/core';
import { Task } from 'src/app/shared/models/task';
import { EventEmitter } from 'events';

@Component({
  selector: 'simproman-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() taskConf:Task;

  @Output() emitAction:EventEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    try{
      this.taskConf = changes.taskConf.currentValue
    }catch(err){

    }
  }

}
