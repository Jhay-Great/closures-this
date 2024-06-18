'use strict'

// 1. Object Methods and this:
// • Create a Person object with the following properties:
// o name (string)
// o age (number)
// • Add a method greet() to the Person object that logs a message like "Hello,
// my name is [name] and I'm [age] years old."
// • Experiment with calling greet() directly on the Person object, using call(),
// apply(), and bind(). Observe how the value of this changes in each
// context

const Person = {
    name: 'John',
    age: 43,

    // greet() {
    //     console.log(`Hello my name is ${this.name} and I'm ${this.age} years old`);
    // }
}

// const felix = {
//     name: 'felix',
//     age: 23,
// }

// felix.bind(this)

// console.log(Person);


const greet = function() {
    console.log(`Hello my name is ${this.name} and I'm ${this.age} years old`);
}

Person.greet = greet;
Person.greet();

const Woman = {
    name: 'Emilia', 
    age: 32,
};
Woman.greet = greet;
Woman.greet();


// Using object constructor
const Person1 = function(name, age) {
    this.name = name;
    this.age = age;
}





const person1 = new Person1('kofi', 2)
console.log(person1);



// 2. Event Handlers and this

const button = document.querySelector('button');
// const handleClick = function() {
//     console.log(this); // returns the element
//     console.log(this.id); // returns the id of the element ie. 'click_here'
//     console.log(this.textContent); // returns the text associated with the element ie. 'click here'
// }
const handleClick = () => {
    console.log(this); // returns a reference to the window object
    console.log(this.id); // returns undefined
    console.log(this.textContent); // returns undefined
}
button.addEventListener('click', handleClick)



