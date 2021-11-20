import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Airline';
 emailId:any= sessionStorage.getItem('id');
  
  ngOnInit(): void {
  
 
  }
  constructor(private router:Router,private userService:UserService) { 
    
  }
 
  logout()
  {
    sessionStorage.setItem('id', 'no');
    console.log(sessionStorage.getItem('id'));
    console.log('from app compo');
    Swal.fire({
      title: 'Success!',
      text: 'Logout successfully',
      icon: 'success',
      confirmButtonText: 'Ok'
    });
    this.router.navigate(['/login'])
  }

  deleteProfile()

  {
    this.userService.deleteUser(this.emailId)
    .subscribe((data:{})=> this.router.navigate(['/home']));
    Swal.fire({
      title: 'Success!',
      text: 'profile deleted successfully',
      icon: 'success',
      confirmButtonText: 'Ok'
    });
    this.router.navigate(['/home'])
  }
}

