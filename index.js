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
    greet() {
        console.log(`Hello my name is ${this.name} and I'm ${this.age} years old`);
    }
    
}

Person.greet();
// console.log(Person);
const person2 = {
    name: 'felix',
    age: 32,
}
const person2Greet = Person.greet.bind(person2);
person2Greet()

// call
const person3 = {
    name: 'Joan',
    age: 20,
}
Person.greet.call(person3);

// apply
const person4 = {
    name: 'Manel',
    age: 22,
}
Person.greet.apply(person4);
/**Observation or response
 * the call, apply and bind are methods which helps to change the value of the 'this' keyword. The bind method returns a function bound to the new object, then we can call that function to execute or run the method.
 * The call method immediately calls the method with the new object bound to it, the call method does not return a function like the bind method. The call methods also calls the method with a list of variables after the this argument has been specified.
 * The apply method is similar to the call method as it also calls the method immediately without returning a function like the bind method. The apply method also accepts an array of the variables which would be called with the apply method.
 */



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
 * the 'this' keyword in a function declaration or anonymous function points or is a reference to the element calling the event. And in this cases that's the button element. Logging this to the console called in the function expression, it returned the element attached to the addEventlistener method, calling 'this' on the 'id' 'this.id' logs the value of the id passed as an attribute to the element. However when an arrow function is used the 'this' keyword points to the window object. This is clear in the example when 'this' was logged to the console. 'this.id' returned undefined since where was no property of 'id' on the window object. From this it's clear the calling 'this' in the addEventListener method would reference the window object whiles in the function declaration or anonymous function expression it refers to the element attached to the event listener.
 */

// 3.Private Data with Closures and this
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
// counter.getCount();


// 4. Reusable Component with Closure and this
const createTimer = function(duration, elementId) {
    // initializing state and element reference
    let time = duration; 
    const element = document.getElementById(elementId);
    console.log(this)

    const timer = () => {
        console.log(this);
        element.textContent = time;
        time -= 1;
        if (time <  0) {
            console.log('Your time is up!!!!');
            clearInterval(interval);
        }
    }
    // set the timer
    console.log(this);
    const countDown = timer.bind(this);
    const interval = setInterval(countDown, 1000)
}
// createTimer(10, 'display');
/**Observation
 * the 'this' keyword in this instance returns undefined 'in strict mode' but without 'use strict' statement, it references the window object since createTimer being called as a standalone function. If the 'createTimer' function was called as a method of an object's property the 'this' keyword would reference the object the 'createTimer' method is attached to.
 */




