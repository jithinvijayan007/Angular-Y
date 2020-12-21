import { Component } from '@angular/core';
import { User } from "./app.Model";
import { CustomerServiceService } from "../customer-service.service";
import { Router, RouterModule, Routes } from '@angular/router';


@Component({

  templateUrl: './app.AddComponent.html',

})
export class AddComponent {
  todays_date = new Date();
  services = [];

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
    },err =>{
      console.log(err)
    });
  }

  Add(){
          

          if((this.UserModel.bint_mobile.length != "10") && typeof(this.UserModel.bint_mobile == typeof("abc"))){
            alert("Enter valid Phone Number")
            return false
            }
          if ((this.UserModel.bint_mobile.length > "9") && (this.UserModel.vchr_name.length < "1")){
            alert("Please enter the name Also ")
            return false
          }
          // if ((this.UserModel.dbl_amount == "") !! (this.UserModel.dbl_service_charge == "")){
          //   alert("Please enter the valid amount ")
          //   return false
          // }
          


          this.UserModels.push(this.UserModel);
          console.log(this.UserModel);
          
          this.custservice.create('api/customer',this.UserModel).subscribe((res) => {
            console.log(res)
          },err =>{
            console.log(err)
          });
          this.UserModel = new User();
          this.route.navigate(['List']);
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
