import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService{
  data: Observable<any>;

  constructor(public http:Http){

  }

  getUsers(){

    return this.http.get('http://jsonplaceholder.typicode.com/users')
    .map(res => res.json());
  }
  addUser(user){
    return this.http.post('http://jsonplaceholder.typicode.com/users',user)
    .map(res => res.json());
  }

  getData(){

    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      },1000);

      setTimeout(()=> {
        observer.next(2);
      },2000);

      setTimeout(()=> {
        observer.next(3);
      },3000);

      setTimeout(()=> {
        observer.next(4);
      },4000);

      setTimeout(()=> {
        observer.next('Hello');
      },5000);

      setTimeout(()=> {
        observer.complete();
      },6000);


    });
    return this.data;
  }
}