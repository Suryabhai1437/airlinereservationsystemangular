import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public ticket={} as any;
  constructor(private aroute:ActivatedRoute,private userService:UserService,private router:Router) { }
  public aadharId:any=this.aroute.snapshot.params['aadharId'];
date:string='';
name:string='';
year:string='';
cvv:number=0;
cardNumber:number=0;

  ngOnInit(): void {

    this.userService.getTicketById(this.aadharId)
    .subscribe((data)=>(this.ticket=data));
    console.log(this.ticket);
  }
onclick(){ 

  if(this.cardNumber==0 || this.cvv==0 || this.date=='' ||
  this.name=='' || this.year=='')
  {
    Swal.fire({
      title: 'Error!',
      text: 'Please add all fields',
      icon: 'error',
      confirmButtonText: 'Ok'
    });
  }
else if((this.cvv).toString().length !=3)
{
  Swal.fire({
    title: 'Error!',
    text: 'Please add correct CVV ',
    icon: 'error',
    confirmButtonText: 'Ok'
  });

}
else if((this.cardNumber).toString().length !=12)
{
  Swal.fire({
    title: 'Error!',
    text: 'Please add correct card no ',
    icon: 'error',
    confirmButtonText: 'Ok'
  }); 
}
else{
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  

  
  swalWithBootstrapButtons.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Book!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Booked!',
        'Booked.',
        'success'
      )
      this.router.navigate(['/ticketDetails',this.aadharId]);
     // routerLink="/ticketDetails/{{this.aadharId}}"
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelled',
        'Cancelled :)',
        'error'
      )
      

      this.userService.cancelTicket(Number(this.ticket.aadharId),Number(this.ticket.flight.flId))
      .subscribe((data:{})=> this.router.navigate(['/home']));
      this.router.navigate(['/home'])
      console.log(this.ticket);
    }
  })
}

}
}
