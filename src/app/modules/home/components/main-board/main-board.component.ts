import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'simproman-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.scss']
})
export class MainBoardComponent implements OnInit {

  constructor() { }

  todo = [
    {
      name: 'Get to work',
      priority: 'high',
      subtasks: [
        {
          name: 'Get to work, test test etstes tetstts aksjh ',
          priority: 'high',
        },
        {
          name: 'Get to work',
          priority: 'high',
        },
        {
          name: 'Get to work',
          priority: 'high',
        },
      ]
    },
    {
      name: 'Pick up groceries',
      priority: 'low'
    },
    {
      name: 'Go home',
      priority: 'medium'
    },
    {
      name: 'Fall asleep',
      priority: 'low'
    },
    {
      name: 'Go home',
      priority: 'medium'
    },
    {
      name: 'Fall asleep',
      priority: 'low'
    },
    {
      name: 'Go home',
      priority: 'medium'
    },
    {
      name: 'Fall asleep',
      priority: 'low'
    },
    {
      name: 'Go home',
      priority: 'medium'
    },
    {
      name: 'Fall asleep',
      priority: 'low'
    },
    {
      name: 'Go home',
      priority: 'medium'
    },
    {
      name: 'Fall asleep',
      priority: 'low'
    },
  ];

  inProcess = [
    {
      name: 'test',
      priority: 'high',
      subtasks: [
        {
          name: 'Get to work, test test etstes tetstts aksjh ',
          priority: 'high',
        },
        {
          name: 'Get to work',
          priority: 'high',
        },
        {
          name: 'Get to work',
          priority: 'high',
        },
      ]
    },
    {
      name: 'test',
      priority: 'medium'
    },
    {
      name: 'test',
      priority: 'low'
    }
  ];

  done = [
    {
      name: 'Get up',
      priority: 'high'
    },
    {
      name: 'Brush teeth',
      priority: 'medium'
    },
    {
      name: 'Take a shower',
      priority: 'low'
    },
    {
      name: 'Check e-mail',
      priority: 'medium'
    },
    {
      name: 'Walk dog',
      priority: 'low'
    }
  ];
  ngOnInit() {
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  


}
