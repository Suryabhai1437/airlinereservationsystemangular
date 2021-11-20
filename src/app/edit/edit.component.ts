import { Component, Input, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private userService:UserService) { }

  public data:any;
  
  @Input()
  public user:any={emailId:'',password:'',gender:'',
  userName:{firstName:'',
  lastName:''},
  phone:{phone1:'',
  phone2:''},
  country:''};
  
  cpassword:string='';
  
  ngOnInit(): void {
    
  this.data = sessionStorage.getItem('id');
  console.log(this.data);
  if(this.data!=null){
  this.userService.getUserById(this.data)
      .subscribe((response)=>(this.user=response.body)
      );
      console.log(this.user);
  }
  }
  updateData(){
    if(this.cpassword!=this.user.password){
      Swal.fire({
        title: 'Error!',
        text: 'Check password and confirm password are same',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }else{
    console.log('employee data ---' + this.user);

    this.userService.updateUser(this.user)
      .subscribe((data:{}) => (location.reload())
      );
      console.log(this.user);
      Swal.fire({
        title: 'Success!',
        text: 'You are getting updated',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
    }
  }
  

}
