import { Component } from '@angular/core';

@Component({
    selector:'sandbox',
    template:`<h1> Hello {{name}}  </h1> 
              <p> <b>My name is {{person.firstName}} {{person.lastName}} and i am {{person.age}} years old</b></p>
              <h3> your age after 10 years will be {{ showAge() }}</h3>
              <h3> {{ 1+1 }}</h3>
              <p>{{ 'santorini' }}</p>
              <h3> customer id is {{ customer.id }} </h3>
              <h3> customer name is {{ customer.name }} </h3>
              <h3> customer email is {{ customer.email }} </h3>
    `

})

export class SandboxComponent{
    name = 'Sachin Saini';
    age = 20;
    person = {
        firstName:'Sabhya',
        lastName:'Verma',
        age:22
    }
    customer:Customer;


    constructor(){
        console.log('constructor ran...');
        this.person.age=21;
        this.customerProperties();
    }

    showAge(){
        return this.person.age+10;
    }

    customerProperties()
    {
        this.customer = {
            id:1,
            name:'sachin',
            email:'haha@gmail.com'
        }

        return this.customer;
    }
}


interface Customer{
    id:number,
    name:string,
    email:string
}