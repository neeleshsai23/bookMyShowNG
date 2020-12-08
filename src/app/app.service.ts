import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  readonly rootUrl = "https://localhost:44335";

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

  authenticateAdmin(username,password):Observable<any>{
      const headers = new HttpHeaders({'Content-Type':'application/x-wwww-form-urlencoded'});
      const details="username="+username+"&password="+password+"&grant_type=password";
      return this.http.post(this.rootUrl+'/token',details,{headers}).pipe(catchError(this.handleError))
  }

  getUserRole(data){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    this.http.get(this.rootUrl+`/api/User/GetUserRole/${data}`).subscribe(result=>localStorage.setItem('user_role',result.toString()));
    window.location.href='/movies'; 
  
  }

  getRole(data){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.get(this.rootUrl+`/api/User/GetRole/${data}`).subscribe(result=>localStorage.setItem('admin_role',result.toString()));
  }

  insertMovie(Data){
    console.log("Service",Data)
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.rootUrl+'/api/User/AddMovie',Data,{headers}).subscribe((result)=>console.log("result",result));
  }

  registerUser(details){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.rootUrl+'/api/User/RegisterUser',details,{headers})
    .subscribe((result)=>console.log("result",result))
  }

  displayLogin(){
    if(localStorage.getItem('user_role')=='USER'){
      return false;
    }
    else{
      return true;
    }
  }

  logoutUser(){
    localStorage.removeItem('user_role');
    localStorage.removeItem('ticketprice');
    localStorage.removeItem('moviename');
    localStorage.removeItem('tax');
    localStorage.removeItem('seats');
    localStorage.removeItem('access_token');
    window.location.href='/home';
  }

}
