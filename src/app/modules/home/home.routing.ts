import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/modules/home/home.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'myBoard',
        pathMatch: 'full'
    }, {
        path: 'myBoard',
        component: HomeComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
