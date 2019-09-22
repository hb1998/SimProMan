import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskModalComponent } from 'src/app/shared/components/add-task-modal/add-task-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog:MatDialog
  ) { }

  ngOnInit() {
  }

  addTask(){
    const dialogRef = this.dialog.open(AddTaskModalComponent)
    dialogRef.afterClosed().subscribe((res)=>{
      console.log(res)
    })
  }

}
