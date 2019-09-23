import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskModalComponent } from 'src/app/shared/components/add-task-modal/add-task-modal.component';
import { MainBoardService } from 'src/app/modules/home/services/main-board.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  viewMode:string="long";
  constructor(
    public dialog:MatDialog,
    public mainBoardService:MainBoardService
  ) { }

  ngOnInit() {
    this.subscribeToViewMode()
  }

  addTask(){
    const dialogRef = this.dialog.open(AddTaskModalComponent)
    dialogRef.afterClosed().subscribe((res)=>{
      console.log(res)
    })
  }

  subscribeToViewMode(){
    this.mainBoardService.viewMode.subscribe((res)=>{
      this.viewMode = res
    })
  }
  toggleView(mode){
    this.mainBoardService.viewMode.next(mode)
  }

}
