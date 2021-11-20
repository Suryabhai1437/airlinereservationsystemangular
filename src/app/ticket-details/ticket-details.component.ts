import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {

  constructor(private aroute:ActivatedRoute,private userService:UserService,private router:Router) { }
  public ticket={} as any;
  public aadharId:any=this.aroute.snapshot.params['aadharId'];
  ngOnInit(): void {
    this.userService.getTicketById(this.aadharId)
    .subscribe((data)=>(this.ticket=data));
    console.log(this.ticket);
    console.log('from ng onit');
  }
  onClick(){
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Thank you:) have a great journey!',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigate(['/home']);
  }

}
