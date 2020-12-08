import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {AppService} from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AppService:AppService) { }

  ngOnInit(): void {
  }

  loginError = false;


  loginform = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  onSubmit(formData){
    this.AppService.authenticateAdmin(formData.username,formData.password)
    .subscribe(
      (result:any)=>{localStorage.setItem('access_token',result.access_token);
      window.location.href='/admin';
    },
    (error: HttpErrorResponse)=>{
      this.loginError=true;
      alert('Invalid Credentials');
      localStorage.setItem('access_token',null);
    })
  }
  

}
