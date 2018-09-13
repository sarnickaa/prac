
#### Explain how this works in JavaScript
'this' refers to the context of a function. i.e. what OWNS the function as it is being executed?

Default Binding: let x = this and function myFunction() {
return this
}
this = the global object

Object Method Binding: when 'this' is defined in a constructor - the object instance will own 'this'
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
