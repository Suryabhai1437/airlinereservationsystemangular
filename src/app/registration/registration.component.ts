import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
import { User } from '../User';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @Input()
   public user={emailId:'',password:'',gender:'',
     userName:{firstName:'',
     lastName:''},
     phone:{phone1:'',
     phone2:''},
     country:''};
  cpassword:string='';
  constructor(public userService:UserService,private router:Router) {}

  ngOnInit(): void {} 

  register(){
   
    if(this.user.password==this.cpassword)
    {
      Swal.fire({
        title: 'Error!',
        text: 'Please check your password',
        icon: 'error',
        confirmButtonText: 'Ok'
      });   
    }
    else if(this.user.country=='' || this.user.userName.firstName=='' ||
   this.user.userName.lastName=='' || this.user.phone.phone1=='' || this.user.password=='' 
   || this.user.emailId=='' || this.user.gender=='')
    {
      Swal.fire({
        title: 'Error!',
        text: 'Enter all fields',
        icon: 'error',
        confirmButtonText: 'Ok'
      }); 
    }
    else if((this.user.password).length!=8)
  {
    Swal.fire({
      title: 'Error!',
      text: 'Enter 8 digits password',
      icon: 'error',
      confirmButtonText: 'Ok'
    });  
  }
    else if((this.user.phone.phone1).length>10 || (this.user.phone.phone1).length<10 ||
    (this.user.phone.phone2).length>10 || (this.user.phone.phone2).length<10)
    {
      Swal.fire({
        title: 'Error!',
        text: 'Add correct phone no',
        icon: 'error',
        confirmButtonText: 'Ok'
      }); 
    }
    else{
   
    this.userService
      .register(this.user)
      .subscribe((data : {}) => this.router.navigate(['/login']));
      this.router.navigate(['/login']);
    
  }
  }
}

