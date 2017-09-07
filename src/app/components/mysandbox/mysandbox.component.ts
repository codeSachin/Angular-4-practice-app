import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'mysandbox',
  // templateUrl: './mysandbox.component.html',
  template:`
 
  `,
  styleUrls: ['./mysandbox.component.css']
})
export class MysandboxComponent{
  users:string[];
  data:any[] = [];
  constructor(public dataservice:DataService)
  {
    this.dataservice.getData().subscribe(data =>
    {
      console.log(data);
    });
  }

}
