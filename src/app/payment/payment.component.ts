import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private AppService:AppService) { }

  ticketprice = 0;

  displayLoginbtn(){
    return this.AppService.displayLogin();
  }

  logout(){
    this.AppService.logoutUser();
  }

  ngOnInit(): void {
      	let result = localStorage.getItem('moviename');
        document.getElementById('moviename').innerText=result;
        
        let ticketprice=localStorage.getItem('ticketprice');
        let seats = JSON.parse(localStorage.getItem('seats'));
        
        document.getElementById('seats').innerText=seats;
        document.getElementById('ticketprice').innerText=ticketprice;
        
        
        document.getElementById('taxprice').innerText=JSON.parse(localStorage.getItem('tax'));
        document.getElementById('totalprice').innerText=(Number(ticketprice)+Number(JSON.parse(localStorage.getItem('tax')))).toString();
        
  }



}
