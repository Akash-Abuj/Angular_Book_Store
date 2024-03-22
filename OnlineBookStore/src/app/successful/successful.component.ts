import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../Cart';
import { customer } from '../Customer';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-successful',
  templateUrl: './successful.component.html',
  styleUrl: './successful.component.css',
  
})
export class SuccessfulComponent  implements OnInit {
  cart1:any;
  receivedData: any;
  cust : any;
  totalsum:number=0;
  constructor(private userService: UserServiceService,private router: Router,private route: ActivatedRoute){}

  ngOnInit() {

    //this.cust = this.route.snapshot.paramMap.get(data);
    //this.cust=this.receivedData;
    this.totalsum=this.userService.totalsum
    this.cust=this.userService.cust1;
    this.cart1=this.userService.cust1.cart;
    console.log(this.cust);
    console.log("Cart"+this.cart1);

  }
}
