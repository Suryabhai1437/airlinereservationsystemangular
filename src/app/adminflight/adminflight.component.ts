import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-adminflight',
  templateUrl: './adminflight.component.html',
  styleUrls: ['./adminflight.component.css']
})
export class AdminflightComponent implements OnInit {

  constructor(private userService:UserService,private aroute:ActivatedRoute,private router:Router) { }

  @Input()
  public flight={airlineName:'',flName:'',flId:'',startDes:'',endDes:'',srcTime:'',desTime:'',
    classPrice:{businessClassCost:'',
    economyClassCost:''},totalSeat:'',flDate:'',
    totalBookedSeat:'',
    totalAvailableSeat:'',
    } as any;
     

  public flId :any=this.aroute.snapshot.params['flId'];

  ngOnInit(): void {
      console.log(this.flId);
      this.userService.getFlightById(this.flId)
      .subscribe((response)=>(this.flight=response.body));
      console.log(this.flight);
      
    
  }
  addFlightByAdmin(){
    
    if(this.flight.airlineName=='' || this.flight.flName=='' || this.flight.flId==0 
    && this.flight.startDes=='' || this.flight.endDes==''|| this.flight.srcTime=='' 
    && this.flight.desTime=='' || this.flight.classPrice.businessClassCost=='' 
    && this.flight.classPrice.economyClassCost=='' || this.flight.totalSeat=='' 
    && this.flight.flDate=='')
    {
      Swal.fire({
        title: 'Error!',
        text: 'Admin..fill all the fields!!',
        icon: 'error',
        confirmButtonText: 'Ok'
      });   
    }else{
      this.userService.addFlightByAdmin(this.flight)
      .subscribe((data) => (this.flight = data));
        this.router.navigate(['/adminflightlist']);
        
     }
    }
     
}