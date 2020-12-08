import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {

  constructor(private AppService:AppService) { }

  ngOnInit(): void {
  }

  stars: number[] = [1, 2, 3, 4, 5];

  selectedValue=null;

  movieForm = new FormGroup({
    name: new FormControl(''),
    rating: new FormControl(this.selectedValue),
    description : new FormControl(''),
    imageUrl: new FormControl(''),
    youtubeUrl: new FormControl(''),
    language: new FormControl('')
  })

  onSubmit(Data){
    
    this.AppService.insertMovie(Data);
    
    console.log(Data);

  }

  countStar(star) {
    this.selectedValue = star;
    this.movieForm.controls.rating.setValue(this.selectedValue);
    //console.log('Value of star', this.selectedValue);
  }



}
