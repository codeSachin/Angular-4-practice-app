import { Component } from '@angular/core';

@Component({
    selector:'sandbox',
    template:`<h1> Hello {{name}}  </h1> 
              <p> <b>My name is {{person.firstName}} {{person.lastName}} and i am {{person.age}} years old</b></p>
              <h3> your age after 10 years will be {{ showAge() }}</h3>
              <h3> {{ 1+1 }}</h3>
              <p>{{ 'santorini' }}</p>
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


    constructor(){
        console.log('constructor ran...');
        this.person.age=21;
    }

    showAge(){
        return this.person.age+10;
    }
}

