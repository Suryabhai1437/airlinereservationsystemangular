import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { WSeat } from '../WSeat';

import Swal from 'sweetalert2';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(private aroute:ActivatedRoute,private userService:UserService,private router:Router) { }
  public flightId :number=this.aroute.snapshot.params['flightId'];
  public economyClassCost :number=this.aroute.snapshot.params['economyClassCost'];
  public businessClassCost :number=this.aroute.snapshot.params['businessClassCost'];
 click:boolean =false;
 public emailid:any;

  ngOnInit(): void {
  

    
    this.emailid = (String)(sessionStorage.getItem('id'));
    console.log(this.flightId);
    console.log(this.emailid);
    if(this.emailid==='no' || this.emailid=='null')
    {
     Swal.fire({
       title: 'Error!',
       text: 'Login First',
       icon: 'error',
       confirmButtonText: 'Ok'
     });
     this.router.navigate(['/login']);
    }
    this.userService.getAllSeatStatus(this.flightId)
    .subscribe((response)=>(this.WSeat=response.body));
    console.log(this.WSeat);

  }
 
public luggage=0;
public travelClass='';



  public WSeat =[] as any;

  @Input()
  public ticket:any={aadharId:'',bookingDate:'', ticketPrice:this.paymentAmount(),name:{firstName:'',lastName:''},seatNo:Number(''),address:'',
  passportNo:'',flight:{flId:this.flightId},user:{emailId:sessionStorage.getItem('id')}};
  
  isClick(){
   this.click=true; 
  }


 public aadharId= this.ticket.aadharId;
  ticketBooking(){
   console.log(this.ticket)
 
    if(this.ticket.aadharId==''&& this.ticket.name.firstName==''&& this.ticket.name.lastName=='' &&
    this.ticket.seatNo==''&&this.ticket.passportNo=='' && this.travelClass=='')
    {
      Swal.fire({
        title: 'Error!',
        text: 'please add all required fields',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    } else if((this.ticket.aadharId).toString().length>12 || 
    (this.ticket.aadharId).toString().length<12)
    {
      Swal.fire({
        title: 'Error!',
        text: 'please enter correct 12 digits Aadhar ID',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
    else if((this.ticket.passportNo).length>8 || (this.ticket.passportNo).length<8)
    {
      Swal.fire({
        title: 'Error!',
        text: 'please enter correct 8digits Passport No',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
    else if(this.luggage>10){
      Swal.fire({
        title: 'Error!',
        text: 'Can take upto 10kg',
        icon: 'error',
        confirmButtonText: 'Ok'
      }); 
     }
    else{
    this.userService.bookATicket(this.ticket).subscribe((data : {}) =>("done"));
    Swal.fire({
      title: 'Success!',
      text: 'Saved',
      icon: 'success',
      confirmButtonText: 'Ok'
    });
  console.log(this.aadharId);
    
  }

  }


  

luggageCost(luggage:number):number{
  if(this.luggage<=5 && this.luggage>0)
 {
   return 500*this.luggage;
 }else if(this.luggage>5)
 {
return 700*this.luggage;
 }else
 {
 return 0;
 }
}


  paymentAmount():number{
    if(this.travelClass=="EconomyClass")
    {
     
   return this.luggageCost(this.luggage)+Number(this.economyClassCost);
    }
    else{
     return this.luggageCost(this.luggage)+Number(this.businessClassCost);
  }
  }


ngOnDestroy():void{
  this.click=false;
}

}