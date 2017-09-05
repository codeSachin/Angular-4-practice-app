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
    name:string = 'Sachin Saini';
    age:number = 20;
    isGreen = true;
    isUpper = true;
    currentClasses = {};
    currentStyles = {};
    // cake='britannia';
    birthday = new Date(1997,7,17);
    user = {
        name:'',
        email:'',
        phone:''
    }
    imageUrl = 'http://lorempixel.com/400/200';
    // showName:boolean = true;
    // switchNo:number = 5;
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
        //this.customerProperties();
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

    users:string[] = ['John Doe','Naruto Uzumaki', 'Sasuke Uchiha'];

    onSubmit({value, valid}){
        if(valid){
            console.log(value);
        } else {
            console.log('Form is invalid');
        }
       }

    submitted()
    {
        console.log(this.users);
        this.users.push(this.name);
        //for clearing the input name after submitting do below line
        this.name = '';
    }
    // showAge(){
    //     return this.person.age+10;
    // }

    // customerProperties()
    // {
    //     this.customer = {
    //         id:1,
    //         name:'sachin',
    //         email:'haha@gmail.com'
    //     }

    //     return this.customer;
    // }
    // myStr:string = "Hello World";
    // boolValue:boolean = true;
    // fireEvent(e)
    // {
    //     // console.log("fired a click event wooohoo");
    //     // console.log(message);
    //     // console.log(e);
    //     // console.log(e.target.id);
    //     console.log(e.type);
    // }
    // changeValue(e)
    // {
    //     this.myStr = "Goodbye World";
    //     //e.myStr = "bas bas";
    //     this.boolValue = !this.boolValue;
    //     console.log(e);    
    // }
    // myChangedValue = 'Hello';
    // keyEvent(e)
    // {
    //     this.myChangedValue = e.target.value;
    //     console.log(e.type);
    //     console.log(e.target.value);
    // }
}


interface Customer{
    id:number,
    name:string,
    email:string
}