import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flight } from '../Flight';
import { UserService } from '../user.service';

@Component({
  selector: 'app-flightdetails',
  templateUrl: './flightdetails.component.html',
  styleUrls: ['./flightdetails.component.css']
})
export class FlightdetailsComponent implements OnInit {

  constructor(private aroute:ActivatedRoute,private userService:UserService) { }

  public startDes :any=this.aroute.snapshot.params['startDes'];
  public endDes :any=this.aroute.snapshot.params['endDes'];
  
  public flightData = [] as any;

  ngOnInit(): void {
    console.log('from ng onint ' + this.startDes + this.endDes );
   
    this.userService.getFlightBySrcDes(this.startDes,this.endDes)
    .subscribe((response)=>(this.flightData=response.body)
    );
   
  }


}
