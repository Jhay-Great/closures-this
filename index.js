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
// Person.greet();

const Woman = {
    name: 'Emilia', 
    age: 32,
};
Woman.greet = greet;
// Woman.greet();


// Using object constructor
const Person1 = function(name, age) {
    this.name = name;
    this.age = age;
}





const person1 = new Person1('kofi', 2)
// console.log(person1);



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
/**Evaluation or response
 * the 'this' keyword in a function declaration or anonymous function points or is a reference to the element calling the event. And in this cases that's the button element. Logging this to the console called in the function expression, it returned the element attached to the addEventlistener method, calling 'this' on the 'id' logs the value of the id passed as an attribute to the element. However when an arrow function is used the 'this' keyword points to the window object. This is clear in the example when 'this' was logged to the console. 'this.id' returned undefined since where was no property of 'id' on the window object. From this it's clear the calling 'this' in the addEventListener method would reference the window object whiles in the function declaration or anonymous function expression it refers to the element attached to the event listener.
 */

// 3.Private Data with Closures and this:
// • Create a function createCounter() that:
// o Has a private variable count initialized to 0.
// o Returns an object with two methods:
// 1. increment(): Increments the count and logs the new value
// to the console using this.count.
// 2. getCount(): Returns the current value of count.

const createCounter = function() {
    let count = 0;
    return {
        increment() {
            count += 1;
            console.log(this.count) // returns undefined
            console.log(count)
        },
        getCount() {
            console.log(count);
        }
    }
}
/**
 * logging the count variable using the this keyword would return undefined. this.count is equivalent to saying counter.count or objectCallingTheMethod.count as the 'this' keyword would point to or is a reference to the object calling the method. And in this situation the count does not exists in the object as it was not returned as part of the properties of the object.
 */
// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.getCount();


// 4. Reusable Component with Closure and this.
// Create a function createTimer(duration, elementId) that:
// Takes a duration in seconds and an elementId as input.
// Starts a timer that counts down from duration to 0.

// Updates the content of the element with the given elementId to
// display the remaining time every second.
// When the timer reaches 0, logs a message to the console.
// Uses closures to store the timer’s state (remaining time) and this to refer to the correct element.

const createTimer = function(duration, elementId) {
    // initializing state and element reference
    let time = duration; // private value
    const element = document.getElementById(elementId);

    const timer = () => {
        element.textContent = time;
        time -= 1;
        if (time <  0) {
            console.log('Your time is up!!!!');
            // removeSetInterval(timer);
            clearInterval(interval);

        }
    }
    // set the timer
    const interval = setInterval(timer, 1000)
}
createTimer(10, 'display');




