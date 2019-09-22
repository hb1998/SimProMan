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
    setTimeout(() => {
        this.shrinkMode()
    }, 2000);
  }

  ngOnChanges(changes: SimpleChanges) {
    try{
      this.taskConf = changes.taskConf.currentValue
    }catch(err){

    }
  }

  shrinkMode(){
    document.querySelectorAll('.task').forEach((task:HTMLElement)=>{
      task.style.maxHeight = "60px";
      task.style.overflow = "hidden";
    })
  }

  expandedMode(){
    document.querySelectorAll('.task').forEach((task:HTMLElement)=>{
      task.style.maxHeight = "260px";
      task.style.overflow = "hidden";
    })
  }

}
