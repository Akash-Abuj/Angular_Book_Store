import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpServiceService } from '../http-service.service';
import { Product } from '../Product';
import { Router } from '@angular/router';
import { Cart } from '../Cart';
import { login } from '../Login';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  posts:any;
  constructor(private userService: UserServiceService,private router: Router){}
  

model=new login('','');
//posts:any;
userlogin(){
  if(this.model.email!=""  && this.model.password!=""){
  this.userService.userlogin(this.model).subscribe(
    (response:string)=>{this.posts=response;
      console.log(this.posts);
    if(this.posts=="you are welcome"){
      this.router.navigate(['./user-product']);
      this.userService.user_email=this.model.email;
    }
      else
        alert("Enter Valid Credentials, Please Create an Account if not.");
  }
  );
}else
alert("Please Enter Value in the input field.")
}
/*usersignup(){
  this.userService.usersignup(this.model).subscribe(
    (response:string)=>{
      this.posts=response;
      alert(this.posts);
    },
      error=>console.log(error)
  )
    
}*/

usersignup(){

  this.router.navigate(['./signup']);
}

adminlogin(){
  console.log(this.model.email)
  if(this.model.email==="admin"  && this.model.password==="admin123")
  this.router.navigate(['./admin-product']);
  
  else
  alert("Please enter VALID Credentials")
  }

}
