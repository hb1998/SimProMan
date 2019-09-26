import { Component, OnInit } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  imageUrlArray:Array<IImage> = [
    {
     url: "../../../../../assets/illustrations/trackYourProgress.png"

    },
    {
      url:"../../../../../assets/illustrations/todo.png"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
