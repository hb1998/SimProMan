import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  isLoggedin:boolean= false;
  constructor(
    private data:DataService
  ){
    this.subscribeToIsloggedIn()
  }

  subscribeToIsloggedIn(){
    this.data.isLoggedIn.subscribe((res)=>{this.isLoggedin=res})
  }
}
