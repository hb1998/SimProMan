import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [SidemenuComponent, HeaderComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [SidemenuComponent, HeaderComponent]
})
export class CoreModule { }
