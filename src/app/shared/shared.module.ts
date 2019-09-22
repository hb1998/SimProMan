import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialExports } from 'src/app/configs/angularMaterialImports';
import { PriorityComponent } from './components/priority/priority.component';
import { AddTaskModalComponent } from './components/add-task-modal/add-task-modal.component';

@NgModule({
  declarations: [PriorityComponent, AddTaskModalComponent],
  imports: [
    CommonModule,
    ...materialExports,
  ],
  exports:[...materialExports,PriorityComponent]
})
export class SharedModule { }
