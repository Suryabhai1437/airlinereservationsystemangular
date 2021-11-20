import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-allflightdetails',
  templateUrl: './allflightdetails.component.html',
  styleUrls: ['./allflightdetails.component.css']
})
export class AllflightdetailsComponent implements OnInit {

  constructor(private userService:UserService) { }
  public flightData = [] as any;
  ngOnInit(): void {
    if(this.flightData.totalAvailableSeat)
    {
      Swal.fire({
        title: 'Error!',
        text: 'please add all required fields',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
    else{
    this.userService.getAllFlights().subscribe((response)=>(this.flightData=response.body)
    );}
  }

}
