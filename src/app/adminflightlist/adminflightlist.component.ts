import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminflightlist',
  templateUrl: './adminflightlist.component.html',
  styleUrls: ['./adminflightlist.component.css']
})
export class AdminflightlistComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }
  @Input()
  public flightData = {} as any;
 
  ngOnInit(): void {
     this.userService.getAllFlights().subscribe((response)=>(this.flightData=response.body));
  }
  deleteFlight(flId:number){
    this.userService.deleteFlightByAdmin(flId)
    .subscribe((response) => {this.router.navigate(['/adminflightlist'])});
    

  }
  

}