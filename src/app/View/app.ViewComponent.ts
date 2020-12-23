import { Component } from '@angular/core';

import { CustomerServiceService } from "../customer-service.service";
import { Router, RouterModule, Routes } from '@angular/router';
@Component({
  
  templateUrl: './app.ViewComponent.html',
  
})
export class ViewComponent {
  ins_data: any;
  user_data: any;
  servicestat = []
  constructor(public custservice:CustomerServiceService,
    private route: Router){

  }
  
    
    ngOnInit(): void{
      
      this.ins_data=this.custservice.getInfo();
      console.log("Inside component",this.ins_data);
     
      
       
    }

    Display(id){
      console.log("Inside display",id);
      
      this.custservice.getdetail('api/details', id)
    }
  
        
      
}