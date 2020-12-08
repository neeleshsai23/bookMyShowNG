import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'app-book-movie',
  templateUrl: './book-movie.component.html',
  styleUrls: ['./book-movie.component.css']
})
export class BookMovieComponent implements OnInit {

  constructor(private AppService:AppService) { }

  selected =  [] ;
  ticketprice=0;
  id=null;
  tax=0;

  ngOnInit(): void {
  }

  displayLoginbtn(){
    return this.AppService.displayLogin();
  }

  logout(){
    this.AppService.logoutUser();
  }

  selectseat=(event)=>{
    
    this.id=event.target.id;
    if(this.selected.includes(this.id)){
        document.getElementById(`${this.id}`).style.color='white';
        this.selected=this.selected.filter((item)=>item!==this.id)
        this.ticketprice=this.selected.length*150;
    }else{
    document.getElementById(`${this.id}`).style.color='green';
    this.selected.push(this.id);
    this.ticketprice=this.selected.length*150;
    this.ticketprice=this.selected.length*150;
    }

    if(this.ticketprice>=150){
        document.getElementById('price').style.display='block';
        document.getElementById('showprice').innerText=`Total Price - ₹${this.ticketprice}/-`;
    }else{
        document.getElementById('price').style.display='none';
    }
    console.log(this.ticketprice)

    this.tax=this.ticketprice*0.18;

    localStorage.setItem('seats',JSON.stringify(this.selected));
    localStorage.setItem('ticketprice',this.ticketprice.toString());
    localStorage.setItem('tax',this.tax.toString())
    
}

}
