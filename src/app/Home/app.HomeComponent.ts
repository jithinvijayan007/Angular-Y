import { Component } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.HomeComponent.html',
  
})
export class HomeComponent {
  title = 'Service';
  constructor(private serverService: CustomerServiceService){

  }
  ngOnInit(){}
}
