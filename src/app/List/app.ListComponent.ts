import { Component } from '@angular/core';
import { ListUser } from './app.ListModel'
import { CustomerServiceService } from "../customer-service.service";
import { Router, RouterModule, Routes } from '@angular/router';
@Component({
  
  templateUrl: './app.ListComponent.html',
  
})
export class ListComponent {
  ins_data
  servicestat = []
  constructor(public custservice:CustomerServiceService,
    private route: Router){

  }
  
    ListModel : ListUser = new ListUser();
    ListModels : Array<ListUser> = new Array<ListUser>(); 


    ngOnInit(): void{
      
      // this.servicestat.getInfo('api/service').subscribe((res) => {
      //   console.log(res);
        
      //   this.servicestat = res['data'];
      // },err =>{
      //   console.log(err)
      // });
    }

  Search(){
    this.ListModels.push(this.ListModel);
          console.log(this.ListModel);
          
          this.custservice.getdata('api/data',this.ListModel)
        
            
           

            
            
          }
          // this.ListModel = new ListUser();
          // {
          //   this.custservice.getA('api/data').subscribe((res) => {
          //     this.ins_data = res
          //     console.log(this.ins_data);
          // },
          // err =>{
          //   this.ins_data = err
          // });
          
          
    
  
        
      }
