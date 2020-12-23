import { Component } from '@angular/core';
import { User } from "./app.Model";

import { CustomerServiceService } from "../customer-service.service";
import { Router, RouterModule, Routes } from '@angular/router';
@Component({
  
  templateUrl: './app.DetailComponent.html',
  
})
export class DetailComponent {
  user_data
  lstServices
  user_details 
  
  constructor(public custservice:CustomerServiceService,
    private route: Router){

  }
      UserModel : User = new User();
       UserModels : Array<User> = new Array<User>();
  
    
    ngOnInit(): void{
      
      this.user_details=this.custservice.getDetailed();
      console.log("yyyyyyyyyyyyyyyyyyyyyy",this.user_details);
      this.user_data=this.user_details[0];
      
      this.custservice.getData('api/service').subscribe((res) => {
        this.lstServices = res['data'];
        console.log(this.lstServices);
        
      });
    
    //   console.log("Inside component",this.ins_data);
       
      
       
    }
    Update(id){
      this.custservice.update('api/details', this.user_data).subscribe((res) => {
        alert(res)
               
        this.user_data = res
        console.log(this.user_data);
      },err =>{
        console.log(err)
      });
      
    }
    radio_update(id){
      this.user_data.int_paid_status = id 
      this.user_data.int_status = id 
  
    }
    findTotal(){
      if(this.user_data.dbl_amount && this.user_data.dbl_service_charge){
        this.user_data.dbl_total = parseInt(this.user_data.dbl_amount) + parseInt(this.user_data.dbl_service_charge);
      }
      else{
        this.user_data.dbl_total = 0;
      }
  
    }
  
  
        
      
}