import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { MainBoardComponent } from './components/main-board/main-board.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TaskComponent } from './components/main-board/task/task.component';
import { SubTasksComponent } from './components/main-board/task/sub-tasks/sub-tasks.component';

@NgModule({
  declarations: [HomeComponent, MainBoardComponent, TaskComponent, SubTasksComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
    
  ],
  
})
export class HomeModule { }
