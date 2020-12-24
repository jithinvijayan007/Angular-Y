import { Component } from '@angular/core';
import { User } from "./app.Model";
import { CustomerServiceService } from "../customer-service.service";
import { Router, RouterModule, Routes } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler';



@Component({

  templateUrl: './app.AddComponent.html',

})
export class AddComponent {
  todays_date = new Date();
  services = [];
  int_validation_status =0;
  

  constructor(public custservice:CustomerServiceService,
    private route: Router){

  }
  UserModel : User = new User();
  UserModels : Array<User> = new Array<User>();
  
  ngOnInit(): void{
    this.todays_date = new Date();
    console.log(this.todays_date);
    this.UserModel.dat_sale = new Date();
    this.custservice.getData('api/service').subscribe((res) => {
      console.log(res);
      
      this.services = res['data'];
      console.log("dssfd",this.services);
      
    },err =>{
      console.log(err)
    });
  }

  Add(){
          
          console.log(this.UserModel);
          
          // if(String(this.UserModel.bint_mobile).length != 10 && !Number.isInteger(this.UserModel.bint_mobile)){
          //   alert("Enter valid Phone Number")
          //   return false
          //   }
          // if (String(this.UserModel.bint_mobile).length > 9 && (this.UserModel.vchr_name.length < "1")){
          //   alert("Please enter the name also ")
          //   return false
          // }
          // if ((this.UserModel.dbl_amount == "") !! (this.UserModel.dbl_service_charge == "")){
          //   alert("Please enter the valid amount ")
          //   return false
          // }
          
          // if((this.UserModel.bint_mobile.length != 10) ){
          //   alert("Enter a valid mobile number")
          //   return false;
          // }
          // if((this.UserModel.bint_mobile.length) == 10 && (this.UserModel.vchr_name==" ")){
          //   alert("Enter the name also")
          //   return false;
          // }
          //  if ((this.UserModel.vchr_service_name == "") && (this.UserModel.int_paid_status == null) && (this.UserModel.int_status == null) && (this.UserModel.dbl_amount == null) && (this.UserModel.dbl_service_charge == null)){
          //   alert("All fields are required")
          //   return false;
          //  }

          if(this.UserModel.bint_mobile != ""){
            if(String(this.UserModel.bint_mobile).length==10 || String(this.UserModel.bint_mobile).length==11){
                if(this.UserModel.vchr_name == ""){
                  
                  alert("Enter customer name");
                  this.int_validation_status=1;
                  
                }
            }
            else{
              alert("Enter valid phone number");
              this.int_validation_status = 1;
            }
          }
          if(this.UserModel.vchr_service_name == ""){
            alert("Select the service");
            this.int_validation_status = 1;
          }
          if(this.UserModel.int_status =="0" ){
            if(this.UserModel.vchr_ref_no == "")
            {
              alert("Enter the reference number");
              this.int_validation_status = 1;
            }
          }
          if(this.UserModel.vchr_service_name == "" || this.UserModel.dbl_amount == ""){
            this.int_validation_status = 1;
            alert("Enter the service details")
          }
          if(this.int_validation_status == 0)
          {

          

      
              
          
          
          
           


          this.UserModels.push(this.UserModel);
          console.log(this.UserModel);

          
          
          this.custservice.create('api/customer',this.UserModel).subscribe((res) => {
            console.log(res)
            this.route.navigate(['List']);
          },err =>{
            console.log(err)
          });
          this.UserModel = new User();
         
  }
}
  Total(){
    if(this.UserModel.dbl_amount && this.UserModel.dbl_service_charge){
      this.UserModel.dbl_total = parseInt(this.UserModel.dbl_amount) + parseInt(this.UserModel.dbl_service_charge);
    }
    else{
      this.UserModel.dbl_total = 0;
    }

  }

}
