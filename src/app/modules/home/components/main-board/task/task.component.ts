import { Component, OnInit, Input, SimpleChanges, Output } from '@angular/core';
import { Task } from 'src/app/shared/models/task';
import { EventEmitter } from 'events';
import { MainBoardService } from 'src/app/modules/home/services/main-board.service';

@Component({
  selector: 'simproman-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() taskConf: Task;
  @Input() taskType: string;
  @Output() moveTasktoDest: EventEmitter = new EventEmitter();

  constructor(
    public mainBoardService: MainBoardService
  ) { }

  ngOnInit() {
   this.subscribeToViewMode();
  }

  ngOnChanges(changes: SimpleChanges) {
    try {
      this.taskConf = changes.taskConf.currentValue;
    } catch (err) {

    }
  }
  subscribeToViewMode() {
    this.mainBoardService.viewMode.subscribe((res) => {
      if (res === 'short') {
        this.shortModeAll();
      } else {
        this.longModeAll();
      }
    });
  }

  toggleTask(task: HTMLElement) {
    if (task.style.maxHeight !== '60px') {
      this.shortModeSingle(task);
    } else {
      this.longModeSingle(task);
    }
  }
  // seperate functions for all functionalities to avoid comparsions when toggling
  shortModeSingle(task) {
    task.style.maxHeight = '60px';
    task.style.overflow = 'hidden';
  }
  longModeSingle(task) {
    task.style.maxHeight = '260px';
    task.style.overflow = 'hidden';
  }


  shortModeAll() {
    document.querySelectorAll('.task').forEach((task: HTMLElement) => {
     this.shortModeSingle(task);
    });
  }

  longModeAll() {
    document.querySelectorAll('.task').forEach((task: HTMLElement) => {
     this.longModeSingle(task);
    });
  }

  moveTask(dest){
    this
  }

}
