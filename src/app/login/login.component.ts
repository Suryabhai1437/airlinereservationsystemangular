import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }
  @Input()
  emailId:string='';
  @Input()
  password:string='';
  userEmailId:string='';
  status:any='';
 
  ngOnInit(): void {
  }
  
  getUserByIdPass(){
   
    if(this.emailId=='adminemail@gmail.com'&& this.password=='admin123'){
      this.userService.getAdminByIdPass(this.emailId,this.password)
      .subscribe((response) => {this.router.navigate(['/admin'])}
      );
      Swal.fire({
        title: 'Success!',
        text: 'WELCOME TO Admin AIRLINE RESERVATION SYSTEM',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
      this.router.navigate(['/admin']);
      sessionStorage.setItem('id', this.emailId);
      console.log('from getUseradmin in login.ts ' + this.emailId );
    }else{
      
      this.userService.getUserByIdPass(this.emailId,this.password)
      .subscribe((response) => ( this.status=response.statusText
      ));
      
      if(this.status=='OK'){
        console.log('from getUser in login.ts ' + this.emailId );
        Swal.fire({
          title: 'Success!',
          text: 'WELCOME TO AIRLINE RESERVATION SYSTEM',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
        sessionStorage.setItem('id', this.emailId);
        console.log(this.emailId);
        this.router.navigate(['/home']);
        
      }else{
        console.log('from getUser in login.ts ' + this.emailId );
        Swal.fire({
          title: 'Error!',
          text: 'Incorrect EmailId/password',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
        
        this.router.navigate(['/login']);
      }
    }

  }
}
