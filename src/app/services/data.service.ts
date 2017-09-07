import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  data:Observable<Array<number>>;
  constructor(){

  }

  getData()
  {
    this.data = new Observable(observer => {
      setTimeout(()=>{
        observer.next(1);
      },1000);

      setTimeout(()=>{
        observer.next(2);
      },2000);
      setTimeout(()=>{
        observer.complete();
      },3000);
    })
    return this.data;
  }
}