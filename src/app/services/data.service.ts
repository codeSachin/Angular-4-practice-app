import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  users:string[];
  constructor() {
      this.users = ['Sachin', 'Saini', 'Naruto', 'Uzumaki'];
   }

  //  this function gets called from outside i.e. from our component
   getUsers()
   {
     return this.users;
   }

}
