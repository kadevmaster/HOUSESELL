import { Router } from '@angular/router';
import { AlertifyService } from './../../services/alertify.service';
import { AuthService } from './../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService : AuthService, private alertify : AlertifyService, private router:Router) { }

  ngOnInit() {
  }

  onLogin(loginForm:NgForm){
    console.log(loginForm.value);
    const token = this.authService.authUser(loginForm.value);
    if (token)
  {
    localStorage.setItem('token', token.userName);
    this.alertify.success('Login Successful')
    this.router.navigate(['/'])
  } else
  {
    this.alertify.error('User id or password wrong')
  }
}
}
