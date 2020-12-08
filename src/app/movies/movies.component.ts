import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppService} from '../app.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private http:HttpClient,private AppService:AppService) { }

  movieDetails = null;

  ngOnInit():void {
    
  }

  displayLoginbtn(){
    return this.AppService.displayLogin();
  }

  logout(){
    this.AppService.logoutUser();
  }

  showTeluguMovies(){
    this.http.get('https://localhost:44335/api/User/ShowTeluguMovies').subscribe(data=>this.movieDetails=data);
    console.log(this.movieDetails);
  }

  showHindiMovies(){
    this.http.get('https://localhost:44335/api/User/ShowHindiMovies').subscribe(data=>this.movieDetails=data);
  }

  showEnglishMovies(){
    this.http.get('https://localhost:44335/api/User/ShowEnglishMovies').subscribe(data=>this.movieDetails=data)
  }

  bookmovie=(event)=>{
    localStorage.setItem('moviename',event.target.id);
    window.location.href='/book';
}

}
