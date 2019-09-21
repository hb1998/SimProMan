import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [SidemenuComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports:[SidemenuComponent,HeaderComponent]
})
export class CoreModule { }
