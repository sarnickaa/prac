#### Explain Event Delegation
its an event handling pattern - where if you have multiple elements that must have the same event occur - you put the event handler on their common ancestor only instead of on each element

i.e. instead of an onClick handler on each element of a table/list etc. - a catch-all handler is set up on the <ul> or <table> element.

table.onClick = function(event) {
let target = event.target // wherever the click was

if(target.tagName != 'td') return // if not a datacell ignore, else

highlight(target) // apply highlight
}

#### Explain how this works in JavaScript
'this' refers to the context of a function. i.e. what OWNS the function as it is being executed?

Default/implicit Binding: let x = this and function myFunction() {
return this
}
this = the global object

Object Binding: when 'this' is defined in a constructor - the object instance will own 'this'
nb. always return 'this' in a method to make it chainable

Explicit Function Binding: .call() .apply() and .bind()

.call() - allows you to call a function/method and pass in an object as the context for 'this'
person1.fullName.call(person2)
first param = context Object
subsequent params = arguments for the actuall function - separate

.apply() - allows you to call a function/method and pass in an object as the context for 'this'
person1.fullName.call(person2)
first param = context Object
subsequent param = takes arguments for the actual function AS AN ARRAY

.bind() - allows your to provide an object to forever be the context for 'this'

#### Explain how prototypal inheritance works
everything in JS is basically object. Every object can have methods/properties ascribed to it. By default every object in JS has a prototype property which links it to its 'parent' object. Almost everything in JS is an instance of Object = the top of the prototype chain.

When a method/property is called for a particular instance of an object - JS will not only search for that method/property on the instance of the object in question - but will travel up the inheritance tree through the objects prototypes to find it. JS will search through the PROTOTYPE CHAIN. Thus each instance doesn't need to have its own copies of the method in question - there is a link  back to the parent through the prototype attribute.

#### Explain why the following doesn't work as an IIFE:
#### function foo(){ }();.
## What needs to be changed to properly make it an IIFE?
IIFE = a function that runs as soon as its defined

function statement = function keyword + name + () + {code}
parens placed after a function statement are invalid as they are totally separate from the statement i.e. they are just a grouping operator at this point and do NOT indicate that the function statement is to be invoked.

parens are only valid if they contain a expression to be evaluated

FIX: wrap the function statement in parens - this tells the parser to interpret the function within the parens as a function EXPRESSION not a statement/declaration

(function foo(){code}()) or (function foo(){code})()

#### What's the difference between a variable that is: null, undefined or undeclared? - How would you go about checking for any of these states?
undefined = a variable that is decalred but not assigned a value
use typeof to check status

null = primitive value indicating the explicit lack of a value assigned to a variable
use (variable === null) to check

undeclared = variable declared without var, const or let - in strict mode - will throw an error. Generally is assigned to the global scope thus - irrespective of where it is declared - it will operate in a different scope to its sibling variables.

#### What is a closure, and how/why would you use one?
a closure is a nested function that has access to:
1. variables within its own scope
2. variables within the enclosing functions scope
3. variables in the global scope

a closure is created when the function is defined NOT when it is executed - the closure gives the function a reference to the variables in its 3 layers of scope thus - if those variables change - the the closure-functions have access to the updated variables.

Closures allow variables to be transported to different scopes - because irrespective of where the function itself is exported or called in the code - it will have access to the variables it enclosed when it was defined.

Closures are therefore important for modules that can be reused in various parts of the code (make it easier to create things like libraries)

in React - closures occur when setState() methods are created though ES6 arrow notation i.e. If the function is an => arrow function, 'this' is hard-wired to refer to the value of 'this' at the location where the function was defined i.e. the class itself thus - the setter function can be exported across components to alter state from points deeply nested within the component hierarchy.

#### Can you describe the main difference between a forEach loop and a .map() loop and why you would pick one versus the other?
.map() transforms each item in the array and returns a new array

.forEach() iterates over each element, performs a function on each of those element, does not automatically return anything.

#### What's a typical use case for anonymous functions?
as callbacks that only need to be used once and not alled anywhere else in the code.
used as an IIFE immediatley invoked function expression

#### How do you organize your code? (module pattern, classical inheritance?)
most of my code projects have followed a module pattern that aims for a separation of concerns.

#### Difference between: function Person(){}, var person = Person(), and var person = new Person()?
function Person(){} is a function statement - it performs some action that is defined in the block encapsulated by the curly brackets

var person = new Person() instantiates a new Person object and assigns it to the variable person. It invokes the Person constructor function through the keyword new

#### What's the difference between .call and .apply
both are examples of explicit function binding - in that they allow you to specify an object as the 'context' for the method/function they're attached to. This context will be what 'this' refers to within the body of the function.

the context object is specified as the first argument in both

.call() - subsequent arguemnst to be passed to the function are separated by a comma

.apply() - accepts an array as the second argument for the function. Math.max.apply(null, arr)

#### Explain Function.prototype.bind
creates a new function - the first argument provided is the context object for the functions 'this' keyword.

#### Explain Ajax in as much detail as possible.
AJAX = asynchronous javascript and XML - a part of the jquery library that allows JS to make asynch HTTP requests from a front end client. Has built in methods to request/recieve data in a variety of formats (JSON/XML) from a server
JQUERY =  a JS library that has methods for DOM manipulation/CSS manipulation/HTML manipulation/AJAX - makes it easier to use JS on the front end to create an interactive user event-driven web application.

ADVANTAGES:
improved user experience
responsive/intaractive web pages
HTTP requests

DISADVANTAGES:
potentially not well suited for mobile
can be hard to debug
load times?

#### Explain "hoisting"
JS defaukt behaviour for moving JS function decalrations to the top. During the creation-phase of the global execution context - a function declaration is placed into memory AS A FUNCTION. Thus during runtime/execution phase - it can be called upon and executed BEFORE its physically encountered in the sourcecode as it already exists in memory. Function expressions are different as during the creation phase variables are assigned default value of undefined. assignment only happens at runtime.

#### Describe event bubbling
when a nested/child element is interacted with - that event bubbles up to its parent which often holds an event handler (this is how event delegation occurs)

#### What's the difference between an "attribute" and a "property"
most standard HTML attributes (i.e. class, id, etc.) become 'properties' on the DOM object - however - non-standard attributes can still be accessed as strings through the .get/set/remove/hasAttribute methods

#### Why is extending built-in JavaScript objects not a good idea?
adding methods to Object and Array classes risks breaking functionality in other areas of the codebase

#### Explain the same-origin policy with regards to JavaScript
stops code from another site from executing on your site (this is a Cross Site Scripting atack)

to view the sites as the same - the protocol must me the same (http/https), the domain must be the same and teh port must be the same.

CORS middleware in express based apis allow you to specify a client origin for responses for the API to prevent CORS errors

#### Why is it called a Ternary operator, what does the word "Ternary" indicate?
ternary = 3
a ternary expression accepts 3 operands

the test condition (to evaluate true or false) ? the 'then' expression if true : the 'else' expression if falsey

essetially it is a shorter way to write an if/else statement

#### Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?
in JS all code shares a single global namespace - placing variables in the global namespace can result in unintended collisions deeper within the codebase.

#### SPA
an SPA is a single page application that doesnt rely on multiple pages being served to change the view/content of the page. Only one HTML page is requested by the client from the server. Views are generated dynamically through JS/jquery as needed and in response to user actions. The page does not refresh at any point in this process.

#### EXPLAIN JS PROMISES
a promise is a JS object that returns a value at a later point in time i.e it is an object that represents the eventual completion or failure of an asynch action. A promise is an object that can be resolved for either success or failure

It is a returned object that callbacks are attached to. The callbacks are attached to the returned promise through JS promise object has prototype methods i.e. catch() and then() to manage the returned object in accordance with its resolved state.

PROMISES are used extensivley in express routing - when a callback is passed to an express method i.e. get/post/patch....a promise object is returned (resolved for either success or failure) - a promise chain is then started to manage the returned promise (.then, .catch)

Promises centralize error handling and eliminate the potential for callback hell - it is a cleaner more readable way to run asynchronous tasks.

#### What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?
JSX is a language that compiles to JS - used to create react components
It is easier and more intuitive to define a react element through JSX

#### What tools and techniques do you use debugging JavaScript code?
reproduce the error
invesigate error in dev console, investigate stack trace
place console.logs/debugger breaks in code to determine what teh issue coould be
google anything i don't understand/stack overflow/issue queue to invesigate past errors

#### What language constructions do you use for iterating over object properties and array items?
for loop
map
forEach
for in loop (object)

#### Explain the difference between mutable and immutable objects. What is an example of an immutable object in JavaScript? What are the pros and cons of immutability? How can you achieve immutability in your own code?
MUTABLE - an object whose state can change over time.
IMMUTABLE - an object, that after its created - cannot be changed. Strings and Numbers are immutable in JS
only Objects and Arrays are mutable in JS (reference types vs. primitives)

immutable objects can be safely passed around throughout code without being changed and causing unintended effects. Mutable objects are necessary for responsive actions and flexible data manipulation.

#### Explain the difference between synchronous and asynchronous functions.
an asynchronous function requires time to execute and allows subsequent code to execute before it is finished. Synchronous execution is top down and sequential. later functions will only be executed if earlier functions have completed.

#### WHAT IS THE EVENT LOOP
the mechanism by which JS manages asynch events. The event loop takes an asych function out of the JS call stack (a data structure that traces function calls (when invoked function is pushed on to call stack - when retruns, popped off)) and places it in the callback queue. This allows subsequent funnctions on the callstack to execute before the asynch function is finished. once the call stack is clear - the asynch function executes.

#### Explain the differences on the usage of foo between function foo() {} and var foo = function() {}

function foo() {} is a function declaration
var foo = function () {} is a function expressions
see notes on hoisting and the creation phase of the global execution context.

#### ES6 class and ES5 constructors?
class is essentially just syntactical sugar wrapping the constructor function.

#### Can you offer a use case for the new arrow => function syntax? How does this new syntax differ from other functions?
=> syntax can be used to create function expressions in ES6
using an arrow function within a class/object - automatically binds the 'this' context to the object i.e. when used within a stateful component react.

#### OBJECT/ARRAY destructuring:
makes it possible to unpack values from arrays and objects and assign them to distinct variables.

variable names = object keys, values = object values
const { email, password } = this.state - results in const email and const password with the values contained by those keys in the state object

array destructuring:
const a, b
[a, b] = [10, 20]
 const a = 10
 const b = 20

 #### ES6 Template Literals offer a lot of flexibility in generating strings, can you give an example?
 `${JS expression that can be evaluated}`

 #### What are the benefits of using spread syntax and how is it different from rest syntax?
 spread syntax expands an iterable like an object or an array in a place where a number of argumenrs are expected i.e. in a function call

 const numbers = [1, 2, 3];
console.log(sum(...numbers));
// expected output: 6

let objClone = { ...obj }
var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
// concatenate Array
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2]

[...(new Set(skipped))] // expands a set into an array2

REST PARAMATER - the last paramater to a function can be prefixed with ... if it is unknown how mamy arguments will be provided. all subsequent user provided arguments will be placed into an array

function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// Console Output:
// a, one
// b, two
// manyMoreArgs, [three, four, five, six]

#### How can you share code between files?
by using module.exports{} object and require('') statement in ES5
 aor by using import/from and export statements in ES6
 <!-- https://medium.com/@thejasonfile/a-simple-intro-to-javascript-imports-and-exports-389dd53c3fac -->

#### What is the difference between == and ===?

== is an equality operator which will compare values AND will do any type conversion necessary to allow this.

=== is a strict equality operator - which will compare value without doing any type conversion. values MUST be of the same type to return true.

#### JS EQUALITY OF OBJECTS/ARRAYS
 Internally JavaScript actually has two different approaches for testing equality. Primitives like strings and numbers are compared by their value, while objects like arrays, dates, and plain objects are compared by their reference.
 let a = {
 a: 'a'
 }

 let b = {
 a: 'a'
 }

 a == b returns false and a === b returns false - as a & b are compared by their reference type or place in memory

#### NULL AS OBJECT
Typeof variableName === 'object' will reliably check if variable is type object HOWEVER must also be aware that typeof null ==== 'object' will return true

#### (function(){ var a = b = 3 })() console.log("a/b is defined?" + typeof a/b)
function is an IIFE thus there is an enclosing scope around the variables.
variable assignment happens right to left in JS - (assignment operators are RIGHT ASSOCIATIVE)
 a = b = 5 - evaluates to: b = 5, a = b (a is set to 5 which is the return value of b)


In this case:

b = 3
var a = b

b 'is defined' is true --- b is defined because it is a GLOBAL VARIABLE and accessible outside the scope of the function.
it is global because it does not have var in front of it
HOWEVER if 'use strict' were used - there would be an error 'b' is undefined

a is defined = false --- a is a LOCAL variable thus INACCESSIBLE outside the scope of the executed function

================================================================

var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();

results:
outer func: this.foo = bar
outer func: self.foo = bar // alias for the functions 'this' - since its defined on an object - that object is the context

inner func: this.foo = undefined // the innner function has a different execution context - the context no loger referrs to myObject thus this.foo is undefined
inner func self.foo = bar // self if a variable defined within the functions parent scope and is this accessible.

================================================================

#### What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block
wrapping JS in a function has 2 effects:

1. creates a module that can be exported to different parts of the codebase - important in building libraries
2. it creates a closure around the contents of the file - meaning that there is now a private NAMESPACE for the variables within. They won't conflict with other variable names when its exported to different parts of the codebase.

#### What is the significance, and what are the benefits, of including 'use strict' at the beginning of a JavaScript source file?
'use strict' enforces a stricter syntax parser on the code written. This makes it easier to spot errors and makes it easier to debug code.

code that otherwise would have failed silently will error out or throw exceptiosn. It is good practice to use 'use strict'

1. prevents global variables. without use strict assigining a value to a undeclared variable (i.e. a = 3) will create it as a global variable
2. prevents 'this' coercion. If 'this' refers to null or undefined - without 'use strict' it is set to the global object by default.

#### What is NaN? What is its type? How can you reliably test if a value is equal to NaN

NaN represents 'not a number' i.e. occurs when an operation could not be performed because 1 operand is non numeric or the result of the operation is non numeric

typeof NaN === 'number' // returns true
NaN === NaN // returns FALSE!!!

to test if number is NaN:
value !== value // will ONLY return true if value is NaN

#### (0.1 + 0.2 == 0.3)?
this MAY or MAY NOT result in true since JS numbers are treated with floating point precision.
result: 0.30000000000000004

#### isInteger(x) - how can this function be written?
const isInt = int => {
return (typeof int === 'number') && (int % 1 === 0)
}
// if number % 1 returns no remainder - number is an integer (whole)
also
const isInt = int => {
return (Math.round(int) === int)
}

#### In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?
(function() {
    console.log(1);
    setTimeout(function(){console.log(2)}, 1000);
    setTimeout(function(){console.log(3)}, 0);
    console.log(4);
})();

result: 1, 4, 3, 2
because of the Event loop/JS callstack
setTimeout is an asynch function - when encountered on the callstack - sent immediatley to the callback queue. callstack code continues to execute synchronously. once callstack is clear - browser executes the callback queue.

#### Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a palindrome.

const isPal = s => (s === s.split("").reverse().join("")

non-normalized string i.e. capitals, punctuation and whitespace

const isPal = s => {
s = s.split(/\W+/).join("").toLowerCase()
return (s === s.split("").reverse().join(""))
}

#### Write a sum method which will work properly when invoked using either syntax below.
console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

const sum(x) {
if (arguments.length == 2) { // functions can access an arguments object. .length() determines number of arguments passed
return arguments[0] + arguments[1]
} else {
return function(y) { // if only one argment passed sum(2)(3) - return an anonymous function that adds the argument passed to sum (x) to the argument passed to anon function (y)
return x + y
    }
  }
}


other method:
function sum(x, y) { // when a function is invoked - number of arguments in definition DO NOT have to match number of arguments passed
  if (y !== undefined) {
    return x + y;
  } else {
    return function(y) { return x + y; };
  }
}

#### what is the output?
console.log(1 +  "2" + "2"); // "122"

console.log(1 +  +"2" + "2");
// +"2" is the first operation performed (because it is a unary operator - JS converts "2" to number and makes it a positive due to +)
next is 1 + 2 which is 3
3 + "2" - type coercion to strings
"32"

https://scotch.io/tutorials/javascript-unary-operators-simple-and-useful
unary operator performs an operation on a single operand(argument)
+ tries to coerce operand into a number, make sit positive
- tries to coerce operand into a number, make sit negative
! converts to a boolean, then negates i.e. if(!expression) = if the expression value does NOT exist
++ adds one to operand - if postfix i++ - returns value of i before incrementing, if prefix ++i returns value after incrementing
-- subs one from operand
typeof returns string which is the type of operand
delete deletes a specific index of an array or property of object

console.log(1 +  -"1" + "2");
// "02"

console.log(+"1" +  "1" + "2");
// "112"

console.log( "A" - "B" + "2"); // "NaN2" - 'A' - 'B' operands not numbers thus returns NaN
NaN then concatenated with "2"

console.log( "A" - "B" + 2); NaN - A - B returns NaN... any subsequent operator applied to NaN will return NaN (+ is excluded cause when used with a string it results in concatenation)

#### The following recursive code will cause a stack overflow if the array list is too large. How can you fix this and still retain the recursive pattern?

var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        nextListItem();
    }
};

recursion places the function call on the call stack until it returns a value or a terminating condition exists (here - the condition is (item) i.e. if item is null (item returns false))

var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        setTimeout( nextListItem, 0);
    }
};

here - the setTimeout function is asynch - so it is taken OUT of the callstack and placed on the callback queue - meaning that the eventloop handles the recursion NOT the callstack - the recursion is run on the callback queue NOT the callstack. thus no stack overflow
stack overflow occurs when a program needs to use more memory than is available on the callstack
JS callstack = the sequence or place in the code that the program currently is at.

#### what are the values?
console.log("0 || 1 = " + (0 || 1));
0 || 1 = 1 .... || operator returns first truthy (1 = true) or last falsey ('default' operation)

console.log("1 || 2 = " + (1 || 2));
1 || 2 = 1 - first truthy

console.log("0 && 1 = " + (0 && 1));
0 && 1 = 0 .... && operator returns first falsey or last truthy
('gateway' operation)

console.log("1 && 2 = " + (1 && 2));
1 && 2 = 2 (2 is the last truthy value)

#### what are the values?
console.log(false == '0') // true (must be of the same value and allows for TYPE COERCION i.e. '0' and false can be coerced number values of 0)
console.log(false === '0') // false (must be of the same type and value)

#### what are the values
var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);

in JS - when setting a key on an object - the key will automatically be converted to s STRING

Stringified version of an object = '[object Object]' - thus b and c are essentially the same key when they're set (object keys must be unique) - and the value is just reassigned

a = {
'[object Object]': 456
}

#### what is OOP? Functional programming?
OOP:  a programming paradigm(a style of structuringa nd building computer programs) that focuses on the data we want to manipulate visualized as objects (as representations of entities like people, buttons, buldings etc.) rather than on the actions or logic of the program.

Once an object is identified - its generalized into a class and any actions it needs to perform/communicate with other obects are defined as methods.

subclasses are defined through inheritance and extension.

OBJECT ORIENTATED DESIGN - the practise of planning a system based around interacting objects.

FUNCTIONAL PROGRAMMING: a programming paradigm based on building a series of pure functions (same input will always give same output) that have no side effects - i.e. a side effect is when any external state is altered or any observable change OUTSIDE of the functions return value.

(shared state = any variable or object that exists in a shared scope - accessible by multiple entities)

#### explain react lifecycle
refers to the stages a component goes through as it is created, rendered and destroyed. each stage has methods that notify you and allow you to manipulate these stages.

4 main lifecycle phases:
INITIALIZATION

MOUNTING - occurs when a component is being inserted into the DOM - has 2 methods (componentWillMount() componentDidMount() - use this when making an asynch call i.e. getWines to ensure there is a component in existance to populate with data feteched from an API)

UPDATING - component updates and re renders when it recieves props - these methods allow you to control how that happens i.e componentWillReceiveProps()
shouldComponentUpdate()
componentWillUpdate()
render()
componentDidUpdate()

UNMOUNTING - methods that handle the way a component is removed from the DOM
