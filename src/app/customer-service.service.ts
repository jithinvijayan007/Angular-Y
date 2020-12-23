import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule, Routes } from '@angular/router';

const baseUrl = 'http://127.0.0.1:8000/';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  lst_data ;
  list_detail;
  user_data;
  constructor(private http: HttpClient,private route: Router) { }

  getData(url) {
    console.log('getData');
    
    return this.http.get(baseUrl+url)

  }

  // get(url,id) {
  //   return this.http.get(`${baseUrl}${url}/${id}`);
  // }

  create(url,data) {
    console.log(data);
    
    return this.http.post(baseUrl+url, data)
  }

  // update(url, data) {
  //   return this.http.put(baseUrl+url, data);
  // }
  getdata(url,data) {
    console.log(data);
    
    return this.http.post(baseUrl+url, data).subscribe((res) => {
      console.log(res);
      this.lst_data = res;
      console.log(this.lst_data);
      this.route.navigate(['View']);

      
      
    },err =>{
      console.log(err);
    });
  }
  getInfo(){
    
  
    
    console.log("Inside get Info",this.lst_data);
    
    return this.lst_data

  }

  getA(url) {
    return this.http.get(baseUrl+url)
  }

  
  getdetail(url, data){
    return this.http.post(baseUrl+url, data).subscribe((res) => {
    this.user_data = res;
    console.log(res);
    
    this.route.navigate(['Detail']);
    });
  }
  getDetailed(){
    console.log("Inside getdetail",this.list_detail);

    return this.user_data;
    
  }
   

  update(url, data) {
    
   console.log("xxx", data);
   
    return this.http.put(baseUrl+url, data);
}


}
