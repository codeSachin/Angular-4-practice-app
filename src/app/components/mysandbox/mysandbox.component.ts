import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector:"mysandbox",
  /*template:`
  <div class="container">
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let d of data"> {{d}} </li>
    </ul>

    <div *ngFor = "let user of users">
      <h6> User Name: {{user.name}} </h6>
      <p> Use Email :{{user.email}} </p>
    </div>
  </div>
*/
  templateUrl:"./mysandbox.component.html"
  
})

export class MysandboxComponent{

  data:any[] = [];
  users:any[] =[];
  name:string = 'Sachin Saini';
  age:number = 20;
  user = {
    name:'',
    email:'',
    phone:''
  }
  constructor(public dataservice:DataService){
    this.dataservice.getData().subscribe((data) => {
      console.log(data);
      this.data.push(data);  //used push function here because we created out own observable return which returns after every one second. so we need to push to our data array every time we get a response data.
        
    });
    this.dataservice.getUsers().subscribe((data)=>{
      console.log(data);
      this.users = data; //we directly pasted the data into our users array. because online API delivers direct data simultaneously.
    });
  }

    deleted(id){
      this.dataservice.deleteUser(id).subscribe(res =>{
        console.log(res);
      });
      for(let i=0;i<this.users.length;i++){
        if(id == this.users[i].id)
          {
            this.users.splice(i,1);
          }
      }
    }


  submitted(){
    this.dataservice.addUser(this.user).subscribe((user) => {
      console.log(user);
      this.users.unshift(user);
    });
    
  }

}
