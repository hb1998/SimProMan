import { Component, OnInit } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  imageUrlArray: Array<IImage> = [
    {
      url: "../../../../../assets/illustrations/trackYourProgress.png"

    },
    {
      url: "../../../../../assets/illustrations/todo.png"
    }
  ]

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private data:DataService
  ) { }
  loginForm = this.fb.group({
    username: ['', Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)],
    password: ['', Validators.required]
  })


  ngOnInit() {
  }

  login(ev) {
    ev.preventDefault()
    console.log(this.loginForm.value)
    this.data.isLoggedIn.next(true)
    this.router.navigateByUrl('/home')
  }

}
