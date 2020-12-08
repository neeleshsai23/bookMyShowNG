import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {AppService} from '../app.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private AppService:AppService) { }

  ngOnInit(): void {
  }

  signupForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    name : new FormControl(''),
    age: new FormControl(''),
    email: new FormControl(''),
    role: new FormControl('USER')
  })

  onSubmit(formData){
    this.AppService.registerUser(formData);
    setTimeout(()=>alert('Registration Success'));
   }

}
