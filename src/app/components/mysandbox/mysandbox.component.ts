import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'mysandbox',
  // templateUrl: './mysandbox.component.html',
  template:`
  <div class="container">
    <h1>Hello World {{title}} </h1>
    <ul>
      <li *ngFor = " let user of users" > {{user}} </li>
    </ul>

    <ul class  = "list-group">
    <li *ngFor = " let user of users"  class  = "list-group-item"> {{user}} </li>
    </ul>
  </div>
  `,
  styleUrls: ['./mysandbox.component.css']
})
export class MysandboxComponent{
  title:string = "Hello";
  users:string[];
  
  constructor(public dataService:DataService) {   //here we injected this service as a dependency and it's always done in constructor parameter. altough u can declare it as public or private ur wish.....
    console.log(this.dataService.getUsers());
    this.users = this.dataService.getUsers();

    }


}
