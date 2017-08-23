import { Component } from '@angular/core';

@Component({
    selector:'sandbox',
    templateUrl:`./sandbox.component.html`,
    styleUrls:['./sandbox.component.css']
    // styles:[`
    //     p{
    //         color:green;
    //         background-color:yellow;
    //     }

    // `]

})

export class SandboxComponent{
    name = 'Sachin Saini';
    age = 20;
    showName:boolean = true;
    switchNo:number = 2;
    people = ['john', 'doe', 'naruto', 'uzumaki'];
    peopleObjectArray = [
        {
            firstName:'sachin',
            lastName:'saini'
        },
        {
            firstName:'naruto',
            lastName:'uzumaki'
        },
        {
            firstName:'itachi',
            lastName:'uchiha'
        }

    ]
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