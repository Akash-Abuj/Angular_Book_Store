import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { login } from '../Login';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  constructor(private userService: UserServiceService,private router: Router){}


  home(){
    this.router.navigate(['./home']);
  }

  posts:any;
  adminlogin=new login("","");
  username:string="admin";
  password:string="admin";
  adminLogin(){
   // this.userService.adminvalidate = this.adminlogin;
    //console.log(this.userService.adminvalidate.email);
    //this.username=this.userService.adminvalidate.email;
    //this.password=this.userService.adminvalidate.password;
    if(this.username=="admin" || this.password=="admin123")
      this.router.navigate(['./admin-product']);
    else
      alert("Please Enter Valid Credentials");

   /* this.userService.adminvalidate().subscribe(
      (response:string)=>{this.posts=response;
        console.log(this.posts);
      if(this.posts=="you are welcome")
        this.router.navigate(['./user-product']);
        else
          alert(this.posts);
    }
    );
*/
    this.router.navigate(['./admin-product']);
    console.log(this.userService.adminvalidate())
  }
  
}
