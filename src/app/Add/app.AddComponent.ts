import { Component } from '@angular/core';
import { User } from "./app.Model";
import { CustomerServiceService } from "../customer-service.service";
import { Router, RouterModule, Routes } from '@angular/router';

@Component({

  templateUrl: './app.AddComponent.html',

})
export class AddComponent {
  constructor(public custservice:CustomerServiceService,
    private route: Router){

  }
  UserModel : User = new User();
  UserModels : Array<User> = new Array<User>();

  Add(){



          this.UserModels.push(this.UserModel);
          this.custservice.create('sales/',this.UserModel).subscribe((res) => {
            console.log(res)
          },err =>{
            console.log(err)
          });
          this.UserModel = new User();
          this.route.navigate(['List']);
  }

}
