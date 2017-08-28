import { Component } from '@angular/core';

@Component({
    selector:'sandbox',
    templateUrl:`./sandbox.component.html`,
    //styleUrls:['./sandbox.component.css']
    styles:[`
        p{
            font-size:40px;
            margin:0px;
            padding:0px;
            color:green;
            // background-color:yellow;
        }
        .isGreen
        {
            color:green;
        }
        .isUpper
        {
            text-transform:uppercase;
        }

    `]

})

export class SandboxComponent{
    name = 'Sachin Saini';
    age = 20;
    isGreen = true;
    isUpper = true;
    currentClasses = {};
    currentStyles = {};
    cake='britannia';
    birthday = new Date(1997,7,17);

    imageUrl = 'http://lorempixel.com/400/200';
    showName:boolean = true;
    switchNo:number = 5;
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
        this.currentClasses = {
            isGreen:true,
            isUpper:true
        };

        this.currentStyles = {
            'color':this.isGreen ? 'blue' : 'red',
            'font-size':'50px',
            'text-transform':this.isGreen ? 'uppercase' : 'lowercase'
        }
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
    myStr:string = "Hello World";
    boolValue:boolean = true;
    fireEvent(e)
    {
        // console.log("fired a click event wooohoo");
        // console.log(message);
        // console.log(e);
        // console.log(e.target.id);
        console.log(e.type);
    }
    changeValue(e)
    {
        this.myStr = "Goodbye World";
        //e.myStr = "bas bas";
        this.boolValue = !this.boolValue;
        console.log(e);    
    }
    keyEvent(e)
    {
        console.log(e.type);
    }
}


interface Customer{
    id:number,
    name:string,
    email:string
}