import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {AppService} from '../app.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private AppService:AppService) { }

  ngOnInit(): void {
  }

  loginError = false;

  loginform = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  onSubmit(formData){
    this.AppService.getUserRole(formData.username);
    if(localStorage.getItem('user_role')=='USER'){
      window.location.href='/movies';
    }
  }
}
