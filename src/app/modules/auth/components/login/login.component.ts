import { Component, OnInit } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';
import { Router } from '@angular/router';

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

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  login(ev){
    ev.preventDefault()
this.router.navigateByUrl('/home')
  }

}
