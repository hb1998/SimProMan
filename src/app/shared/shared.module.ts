import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialExports } from 'src/app/configs/angularMaterialImports';
import { PriorityComponent } from './components/priority/priority.component';

@NgModule({
  declarations: [PriorityComponent],
  imports: [
    CommonModule,
    ...materialExports
  ],
  exports:[...materialExports,PriorityComponent]
})
export class SharedModule { }
