import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'simproman-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.scss']
})
export class PriorityComponent  {
  @Input() priority:string;
}
