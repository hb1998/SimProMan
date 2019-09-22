import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialExports } from 'src/app/configs/angularMaterialImports';
import { PriorityComponent } from './components/priority/priority.component';
import { AddTaskModalComponent } from './components/add-task-modal/add-task-modal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PriorityComponent, AddTaskModalComponent],
  imports: [
    CommonModule,
    ...materialExports,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[...materialExports,PriorityComponent,AddTaskModalComponent],
  entryComponents:[AddTaskModalComponent]

})
export class SharedModule { }
