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
  dbl_total_amount = 0;
  dbl_service_total = 0;
  dbl_total_charge = 0;
  constructor(public custservice:CustomerServiceService,
    private route: Router){

  }
  
    
    ngOnInit(): void{
      
      this.ins_data=this.custservice.getInfo();
      console.log("Inside component",this.ins_data);
      for(var dbl_value of this.ins_data)
    {
      console.log("Values", dbl_value['dbl_amount']);
      this.dbl_total_amount = this.dbl_total_amount+dbl_value['dbl_amount']
      console.log(this.dbl_total_amount);
      this.dbl_service_total = this.dbl_service_total+dbl_value['dbl_service_charge']
      this.dbl_total_charge = this.dbl_total_charge + dbl_value['dbl_total']
      
      
    }
     
      
       
    }

    Display(id){
      console.log("Inside display",id);
      
      this.custservice.getdetail('api/details', id)
    }
  
        
      
}