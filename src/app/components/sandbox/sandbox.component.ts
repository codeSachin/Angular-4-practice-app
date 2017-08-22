import { Component } from '@angular/core';

@Component({
    selector:'sandbox',
    templateUrl:`./sandbox.component.html`,
    styles:[`
        p{
            color:green;
            background-color:yellow;
        }

    `]

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