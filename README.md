# JavaScript Interview Questions & Answers

> Click :star:if you like the project. Pull Request are highly appreciated. Follow me [@SudheerJonna](https://twitter.com/SudheerJonna) for technical updates.

### Table of Contents

| No. | Questions |
|---- | ---------
|1  | [What are the possible ways to create objects in JavaScript?](#what-are-the-possible-ways-to-create-objects-in-javascript) |
|2  | [What is prototype chain?](#what-is-prototype-chain)|
|3  | [What is the difference between Call, Apply and Bind?](#what-is-the-difference-between-call-apply-and-bind)|
|4  | [What is JSON and its common operations](#what-is-json-and-its-common-operations)|
|5  | [What is the purpose of array slice method?](#what-is-the-purpose-of-array-slice-method)|
|6  | [What is the purpose of array splice method?](#what-is-the-purpose-of-array-splice-method)|
|7  | [What is the difference between slice and splice?](#what-is-the-difference-between-slice-and-splice)|
|8  | [How do you compare Object and Map?](#how-do-you-compare-object-and-map)|
|9  | [What is the difference between == and === operators?](#what-is-the-difference-between-==-and-===-operators)|
|10 | [What are lambda or arrow functions?](#what-are-lambda-or-arrow-functions)|
|11 | [What is a first class function?](#what-is-a-first-class-function)|
|12 | [What is a first order function?](#what-is-a-first-order-function)|
|13 | [What is a higher order function?](#what-is-a-higher-order-function)|
|14 | [What is a unary function?](#what-is-a-unary-function)|
|15 | [What is currying function?](#what-is-currying-function)|
|16 | [What is a pure function?](#what-is-a-pure-function)|
|17 | [What is the purpose of let keyword?](#what-is-the-purpose-of-let-keyword)|
|18 | [What is the difference between let and var?](#what-is-the-difference-between-let-and-var)|
|19 | [What is the reason to choose the name let as keyword?](#what-is-the-reason-to-choose-the-name-let-as-keyword)|
|20 | [How do you redeclare variables in switch block without an error?](#how-do-you-redeclare-variables-in-switch-block-without-an-error)|
|21 | [What is Temporal Dead Zone?](#what-is-temporal-dead-zone)|
|22 | [What is IIFE(Immediately Invoked Function Expression)?](#what-is-iife-(-immediately-invoked-function-expression-)-)|
|23 | [What is the benefit of using modules?](#what-is-the-benefit-of-using-modules)|
|24 | [What is memoization?](#what-is-memoization)|
|25 | [What is Hoisting?](#what-is-hoisting?)|
|26 | [What are classes in ES6?](#what-are-classes-in-es6)|
|27 | [What are closures?](#what-are-closures)|
|28 | [What are modules?](#what-are-modules)|
|29 | [Why do you need modules?](#why-do-you-need-modules)|
|30 | [What is scope in javascript?](#what-is-scope-in-javascript)|
|31 | [What is a service worker?](#what-is-a-service-worker)|
|32 | [How do you manipulate DOM using service worker?](#how-do-you-manipulate-dom-using-service-worker)|
|33 | [How do you reuse information across service worker restarts?](#how-do-you-reuse-information-across-service-worker-restarts)|
|34 | [What is IndexedDB?](#what-is-indexeddb)|
|35 | [What is web storage?](#what-is-web-storage)|
|36 | [What is a post message?](#what-is-a-post-message)|
|37 | [What is a cookie?](#what-is-a-cookie)|
|38 | [Why do you need a Cookie?](#why-do-you-need-a-cookie)|
|39 | [What are the options in a cookie?](#what-are-the-options-in-a-cookie)|
|40 | [How do you delete a cookie?](#how-do-you-delete-a-cookie)|
|41 | [What are the differences between cookie, local storage and session storage?](#What-are-the-differences-between-cookie,-local-storage-and-session-storage)|
|42 | [What is the main difference between localStorage and sessionStorage?](#what-is-the-main-difference-between-localstorage-and-sessionstorage)|
|43 | [How do you access web storage?](#how-do-you-access-web-storage)|
|44 | [What are the methods available on session storage?](#what-are-the-methods-available-on-session-storage)|
|45 | [What is a storage event and its event handler?](#what-is-a-storage-event-and-its-event-handler)|
|46 | [Why do you need web storage?](#why-do-you-need-web-storage)|
|47 | [How do you check web storage browser support?](#how-do-you-check-web-storage-browser-support)|
|48 | [How do you check web workers browser support?](#how-do-you-check-web-workers-browser-support)|
|49 | [Give an example of web worker?](#give-an-example-of-web-worker)|
|50 | [What are the restrictions of web workers on DOM?](#what-are-the-restrictions-of-web-workers-on-dom)|
|51 | [What is a promise?](#what-is-a-promise)|
|52 | [Why do you need a promise?](#why-do-you-need-a-promise)|
|53 | [What are the three states of promise?](#what-are-the-three-states-of-promise)|
|54 | [What is a callback function?](#what-is-a-callback-function)|
|55 | [Why do we need callbacks?](#why-do-we-need-callbacks)|
|56 | [What is a callback hell?](#what-is-a-callback-hell)|
|57 | [What is server-sent events?](#what-is-server-sent-events)|
|58 | [How do you receive server-sent event notifications?](#how-do-you-receive-server-sent-event-notifications)|
|59 | [How do you check browser support for server-sent events?](#how-do-you-check-browser-support-for-server-sent-events)|
|60 | [What are the events available for server sent events?](#what-are-the-events-available-for-server-sent-events)|
|61 | [What are the main rules of promise?](#what-are-the-main-rules-of-promise)|
|62 | [What is callback in callback?](#what-is-callback-in-callback)|
|63 | [What is promise chaining?](#what-is-promise-chaining)|
|64 | [What is promise.all](#what-is-promise.all)|
|65 | [What is the purpose of race method in promise?](#what-is-the-purpose-of-race-method-in-promise)|
|66 | [What is a strict mode in javascript?](#what-is-a-strict-mode-in-javascript)|
|67 | [Why do you need strict mode?](#why-do-you-need-strict-mode)|
|68 | [How do you declare strict mode?](#how-do-you-declare-strict-mode)|
|69 | [What is the purpose of double exclamation?](#what-is-the-purpose-of-double-exclamation)|
|70 | [What is the purpose of delete operator?](#what-is-the-purpose-of-delete-operator)|
|71 | [What is typeof operator?](#what-is-typeof-operator)|
|72 | [What is undefined property?](#what-is-undefined-property)|
|73 | [What is null value?](#what-is-null-value)|
|74 | [What is the difference between null and undefined?](#what-is-the-difference-between-null-and-undefined)|
|75 | [What is eval?](#What-is-eval)|
|76 | [What is the difference between window and document?](#what-is-the-difference-between-window-and-document)|

1. ### What are the possible ways to create objects in JavaScript?

There are many ways to create objects in javascript as below,

1. **Object constructor:**

 The simpliest way to create an empty object is using Object constructor. Currently this approach is not recommended.

 ```javascript
 var object = new Object();
 ```

 2. **Object's create method:**

 The create method of Object creates a new object by passing the prototype object as a parameter
 ```javascript
 var object = Object.create(null);
 ```

 3. **Object literal syntax:**
 The object literal syntax is equivalent to create method when it passes null as parameter
 ```javascript
 var object = {};
 ```

 4. **Function constructor:**
 Create any function and apply the new operator to create object instances,
 ```javascript
 function Person(name){
  var object = {};
  object.name=name;
  object.age=21;
  return object;
 }
 var object = new Person("Sudheer");
 ```

 5. **Function constructor with prototype:**
 This is similar to function constructor but it uses prototype for their properties and methods,

```javascript
function Person(){}
Person.prototype.name = "Sudheer";
var object = new Person();
```

This is equivalent to an instance created with an object create method with a function prototype and then call that function with an instance and parameters as arguments.
```javascript
function func {};

new func(x, y, z);

**(OR)**

// Create a new instance using function prototype.
var newInstance = Object.create(func.prototype)

// Call the function
var result = func.call(newInstance, x, y, z),

// If the result is a non-null object then use it otherwise just use the new instance.
console.log(result && typeof result === 'object' ? result : newInstance);
```

6. **ES6 Class syntax:**
ES6 introduces class feature to create the objects
```javascript
class Person {
 constructor(name) {
    this.name = name;
 }
}

var object = new Person("Sudheer");
```

7. **Singleton pattern:**
A Singleton is an object which can only be instantiated one time. Repeated calls to its constructor return the same instance and this way one can ensure that they don't accidentally create multiple instances.
```javascript
var object = new function(){
  this.name = "Sudheer";
}
```

2. ### What is prototype chain?

**Prototype chaining** is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language. The prototype on object instance is available through Object.getPrototypeOf(object) or __proto__ property whereas prototype on constructors function is available through object.prototype.

3. ### What is the difference between Call, Apply and Bind?
The difference between Call, Apply and Bind can be explained with below examples,
**Call:** The call() method invokes a function with a given `this` value and arguments provided one by one
```javascript
var employee1 = {firstName: 'John', lastName: 'Rodson'};
var employee2 = {firstName: 'Jimmy', lastName: 'Baily'};

function invite(greeting1, greeting2) {
    console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
}

invite.call(employee1, 'Hello', 'How are you?'); // Hello John Rodson, How are you?
invite.call(employee2, 'Hello', 'How are you?'); // Hello Jimmy Baily, How are you?
```
**Apply:** Invokes the function and allows you to pass in arguments as an array
```javascript
var employee1 = {firstName: 'John', lastName: 'Rodson'};
var employee2 = {firstName: 'Jimmy', lastName: 'Baily'};

function invite(greeting1, greeting2) {
    console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
}

invite.apply(employee1, ['Hello', 'How are you?']); // Hello John Rodson, How are you?
invite.apply(employee2, ['Hello', 'How are you?']); // Hello Jimmy Baily, How are you?
```
**bind:** returns a new function, allowing you to pass in an array and any number of arguments
```javascript
var employee1 = {firstName: 'John', lastName: 'Rodson'};
var employee2 = {firstName: 'Jimmy', lastName: 'Baily'};

function invite(greeting1, greeting2) {
    console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
}

var inviteEmployee1 = invite.bind(employee1);
var inviteEmployee2 = invite.bind(employee2);
inviteEmployee1('Hello', 'How are you?'); // Hello John Rodson, How are you?
inviteEmployee2('Hello', 'How are you?'); // Hello Jimmy Baily, How are you?
```
Call and apply are pretty interchangeable. Both execute the current function immediately. You need to decide whether it’s easier to send in an array or a comma separated list of arguments. You can remember by treating Call is for comma (separated list) and Apply is for Array. Whereas Bind creates a new function that will have `this` set to the first parameter passed to bind().

4. ### What is JSON and its common operations?

**JSON** is a text-based data format following JavaScript object syntax, which was popularized by Douglas Crockford. It is useful when you want to transmit data across a network and it is basically just a text file with an extension of .json, and a MIME type of application/json
Parsing: **Converting a string to a native object
```javascript
JSON.parse(text)
```
Stringification: **converting a native object to a string so it can be transmitted across the network
```javascript
JSON.stringify(object)
```

5. ### What is the purpose of array slice method?

The **slice()** method returns the selected elements in an array as a new array object. It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element. If you omit the second argument then it selects till the end. Some of the examples of this method are,
```javascript
let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegers.slice(0,2); // returns [1,2]
let arrayIntegers2 = arrayIntegers.slice(2,3); // returns [3]
let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]
```
**Note:** Slice method won't mutate the original array but it returns the subset as new array.

6. ### What is the purpose of array splice method?

The **splice()** method is used either adds/removes items to/from an array, and then returns the removed item. The first argument specifies the array position for insertion or deletion whereas the option second argument indicates the number of elements to be deleted. Each additional argument is added to the array. Some of the examples of this method are,
```javascript
let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

let arrayIntegers1 = arrayIntegersOriginal1.splice(0,2); // returns [1, 2]; original array: [3, 4, 5]
let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]
let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]
```
**Note:** Splice method modifies the original array and returns the deleted array.

7. ### What is the difference between slice and splice?

Some of the major difference in a tabular form

| Slice | Splice |
|---- | ---------
| Doesn't modify the original array(immutable)  | Modifies the original array(mutable) |
| Returns the subset of original array | Returns the deleted elements as array  |
| Used to pick the elements from array | Used to insert or delete elements to/from array|

8. ### How do you compare Object and Map?
**Objects** are similar to **Maps** in that both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. Due to this reason, Objects have been used as Maps historically. But there are important differences that make using a Map preferable in certain cases.

1. The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.
2. The keys in Map are ordered while keys added to object are not. Thus, when iterating over it, a Map object returns keys in order of insertion.
3. You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually.
4. A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.
5. An Object has a prototype, so there are default keys in the map that could collide with your keys if you're not careful. As of ES5 this can be bypassed by using map = Object.create(null), but this is seldom done.
6. A Map may perform better in scenarios involving frequent addition and removal of key pairs.

9. ### What is the difference between == and === operators?
JavaScript provides both strict(===, !==) and type-converting(==, !=) equality comparison. The strict operators takes type of variable in consideration, while non-strict operators make type correction/conversion based upon values of variables. The strict operators follow the below conditions for different types,
1. Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions.
2. Two numbers are strictly equal when they are numerically equal. i.e, Having the same number value.
   There are two special cases in this,
   1. NaN is not equal to anything, including NaN.
   2. Positive and negative zeros are equal to one another.
3. Two Boolean operands are strictly equal if both are true or both are false.
4. Two objects are strictly equal if they refer to the same Object.
5. Null and Undefined types are not equal with ===, but equal with ==. i.e,
    null===undefined --> false but null==undefined --> true

Some of the example which covers the above cases
```javascript
0 == false   // true
0 === false  // false
1 == "1"     // true
1 === "1"    // false
null == undefined // true
null === undefined // false
'0' == false // true
'0' === false // false
[]==[] or []===[] //false, refer different objects in memory
{}=={} or {}==={} //false, refer different objects in memory
```

10. ### What are lambda or arrow functions?
An arrow function is a shorter syntax for a function expression and does not have its own **this, arguments, super, or new.target**. These function are best suited for non-method functions, and they cannot be used as constructors.

11. ### What is a first class function?
In Javascript, functions are first class objects. First-class functions means when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable. For example, in the below example, handler functions assigned to a listener
```javascript
const handler = () => console.log ('This is a click handler function');
document.addEventListener ('click', handler);
```
12. ### What is a first order function?
First-order function is a function that doesn’t accept other function as an argument and doesn’t return a function as its return value.
```javascript
const firstOrder = () => console.log ('Iam a first order functionn!');
```
13. ### What is a higher order function?
Higher-order function is a function that accepts other function as an argument or returns a function as a return value.
```javascript
const firstOrderFunc = () => console.log ('Hello I'am a First order function');
const higherOrder = ReturnFirstOrderFunc => ReturnFirstOrderFunc ();
higherOrder (firstOrderFunc);
```
14. ### What is a unary function?
Unary function (i.e. monadic) is a function that accepts exactly one argument. Let us take an example of unary function. It stands for single argument accepted by a function.
```javascript
const unaryFunction = a => console.log (a + 10); //Add 10 to the given argument and display the value
```
15. ### What is currying function?
Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument. Currying is named after a mathematician Haskell Curry. By applying currying, a n-ary function turns it into a unary function. Let's take an example of n-ary function and how it turns into a currying function
```javascript
const multiArgFunction = (a, b, c) => a + b + c;
const curryUnaryFunction = a => b => c => a + b + c;
curryUnaryFunction (1); // returns a function: b => c =>  1 + b + c
curryUnaryFunction (1) (2); // returns a function: c => 3 + c
curryUnaryFunction (1) (2) (3); // returns the number 6
```
Curried functions are great to improve code re-usability and functional composition.

16. ### What is a pure function?

A **Pure function** is a function where the return value is only determined by its arguments without any side effects. i.e, If you call a function with the same arguments 'n' number of times and 'n' number of places in the application then it will always return the same value. Let's take an example to see the difference between pure and impure functions,
```javascript
//Impure
let numberArray = [];
const impureAddNumber = number => numberArray.push (number);
//Pure
const pureAddNumber = number => argNumberArray =>
  argNumberArray.concat ([number]);

//Display the results
console.log (impureAddNumber (6)); // returns 6
console.log (numberArray); // returns [6]
console.log (pureAddNumber (7) (numberArray)); // returns [6, 7]
console.log (numberArray); // returns [6]
```
As per above code snippets, Push function is impure itself by altering the array and returning an push number index which is independent of parameter value. Whereas Concat on the other hand takes the array and concatenates it with the other array producing a whole new array without side effects. Also, the return value is a concatenation of previous array.
Remember that Pure functions are important as they simplify unit testing without any side effects and no need for dependency injection. They also avoid tight coupling and makes harder to break your application by not having any side effects. These principles are coming together with **Immutability** concept of ES6 by giving preference to **const** over **let** usage.

17. ### What is the purpose of let keyword?

The let statement declares a **block scope local variable**. Hence the variables defined with let keyword are limited in scope to the block, statement, or expression on which it is used. Whereas variables declared with the var keyword used to define a variable globally, or locally to an entire function regardless of block scope. Let's take an example to demonstrate the usage,
```javascript
let counter = 30;
if (counter === 30) {
  let counter = 31;
  console.log(counter); // 31
}
console.log(counter); // 30 (because if block variable won't exist here)
```

18. ### What is the difference between let and var?
You can list out the differences in a tabular format

| var | let |
|---- | ---------
| It is been available from the beginning of JavaScript  | Introduced as part of ES6 |
| It has function scope | It has block scope  |
| Variables will be hoisted | Won't get hoisted|

Let's take an example to see the difference,
```javascript
function userDetails(username) {
   if(username) {
     console.log(salary); // undefined(due to hoisting)
     console.log(age); // error: age is not defined
     let age = 30;
     var salary = 10000;
   }
   console.log(salary); //10000 (accessible to due function scope)
   console.log(age); //error: age is not defined(due to block scope)
}
```
19. ### What is the reason to choose the name let as keyword?
    Let is a mathematical statement that was adopted by early programming languages like Scheme and Basic. It has been borrowed from dozens of other languages that use let already as a traditional keyword as close to var as possible.
20. ### How do you redeclare variables in switch block without an error?
    If you try to redeclare variables in a `switch block` then it will cause errors because there is only one block. For example, the below code block throws a syntax error as below,
    ```javascript
    let counter = 1;
    switch(x) {
      case 0:
        let name;
        break;

      case 1:
        let name; // SyntaxError for redeclaration.
        break;
    }
    ```
    To avoid this error, you can create a nested block inside a case clause will create a new block scoped lexical environment.
    ```javascript
    let counter = 1;
        switch(x) {
          case 0: {
            let name;
            break;
          }
          case 1: {
            let name; // No SyntaxError for redeclaration.
            break;
          }
        }
    ```
21. ### What is Temporal Dead Zone?
    The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var. In ECMAScript 6, accessing a let or const variable before its declaration (within its scope) causes a ReferenceError. The time span when that happens, between the creation of a variable’s binding and its declaration, is called the temporal dead zone. Let's see this behavior with an example,
    ```javascript
    function somemethod() {
      console.log(counter1); // undefined
      console.log(counter2); // ReferenceError
      var counter1 = 1;
      let counter2 = 2;
    }
    ```
22. ### What is IIFE(Immediately Invoked Function Expression)?
    IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The signature of it would be as below,
    ```javascript
    (function ()
        {
          // logic here
        }
     )
    ();
    ```
    The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world. i.e, If you try to access variables with IIFE then it throws an error as below,
    ```javascript
    (function ()
            {
              var message = "IIFE";
              console.log(message);
            }
     )
    ();
    console.log(message); //Error: message is not defined
    ```
23. ### What is the benefit of using modules?
    There are a lot of benefits to using modules in favour of a sprawling. Some of the benefits are,
    1. Maintainablity
    2. Reusability
    3. Namespacing
24. ### What is memoization?
    Memoization is a programming technique which attempts to increase a function’s performance by caching its previously computed results.  Each time a memoized function is called, its parameters are used to index the cache. If the data is present, then it can be returned, without executing the entire function. Otherwise the function is executed and then the result is added to the cache.
    Let's take an example of adding function with memoization,
    ```javascript
    const memoizAddition = () => {
      let cache = {};
     return (value) => {
      if (value in cache) {
       console.log('Fetching from cache');
       return cache.value;
      }
      else {
       console.log('Calculating result');
       let result = value + 20;
       cache[value] = result;
       return result;
      }
     }
    }
    // returned function from memoizAddition
    const addition = memoizAddition();
    console.log(addition(20)); //output: 40 calculated
    console.log(addition(20)); //output: 40 cached
    ```
25. ### What is Hoisting?
    Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Remember that JavaScript only hoists declarations, not initialisation.
    Let's take a simple example of variable hoisting,
    ```javascript
    console.log(message); //output : undefined
    var message = ’The variable Has been hoisted’;
    ```
    The above code looks like as below to the interpreter,
    ```javascript
    var message;
    console.log(message);
    message = ’The variable Has been hoisted’;
    ```
26. ### What are classes in ES6?
    In ES6, Javascript classes are primarily syntactical sugar over JavaScript’s existing prototype-based inheritance.
    For example, the prototype based inheritance written in function expression as below,
    ```javascript
    function Bike(model,color) {
        this.model = model;
        this.color = color;
    }

    Bike.prototype.getDetails = function() {
        return this.model+ ' bike has' + this.color+ ' color';
    };
    ```
    Whereas ES6 classes can be defined as an alternative
    ```javascript
    class Bike{
      constructor(color, model) {
        this.color= color;
        this.model= model;
      }
    }
    ```
27. ### What are closures?
    A closure is the combination of a function and the lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function’s variables. The closure has three scope chains
    1. Own scope where variables defined between its curly brackets
    2. Outer function’s variables
    3. Global variables
    Let's take an example of closure concept,
    ```javascript
    function Welcome(name){
      var greetingInfo = function(message){
       console.log(message+' '+name);
      }
    return greetingInfo;
    }
    var myFunction = Welcome('John');
    myFunction('Welcome '); //Output: Welcome John
    myFunction('Hello Mr.'); //output: Hello Mr.John
    ```
    As per the above code, the inner function(greetingInfo) has access to the variables in the outer function scope(Welcome) even after outer function has returned.

28. ### What are modules?
    Modules refers small units of independent, reusable code and also act as foundation of many JavaScript design patterns.  Most of the JavaScript modules export an object literal, a function, or a constructor
29. ### Why do you need modules?
    Below are the list of benefits using modules in javascript ecosystem
    1. Maintainablity
    2. Reusability
    3. Namespacing
30. ### What is scope in javascript?
    Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime. In other words, scope determines the visibility of variables and other resources in areas of your code.
31. ### What is a service worker?
    A Service worker is basically a script (JavaScript file) that runs in background, separate from a web page and provide features that don't need a web page or user interaction. Some of the major features of service workers are Rich offline experiences(offline first web application development), periodic background syncs, push notifications, intercept and handle network requests and programmatically managing a cache of responses.
32. ### How do you manipulate DOM using service worker?
    Service worker can't access the DOM directly. But it can communicate with the pages it controls by responding to messages sent via the `postMessage` interface, and those pages can manipulate the DOM.
33. ### How do you reuse information across service worker restarts?
    The problem with service worker is that it get terminated when not in use, and restarted when it's next needed, so you cannot rely on global state within a service worker's `onfetch` and `onmessage` handlers. In this case, service workers will have access to IndexedDB API in order to persist and reuse across restarts.
34. ### What is IndexedDB?
    IndexedDB is a low-level API for client-side storage of larger amounts of structured data, including files/blobs. This API uses indexes to enable high-performance searches of this data.
35. ### What is web storage?
    Web storage is an API that provides a mechanism by which browsers can store key/value pairs locally within the user's browser, in a much more intuitive fashion than using cookies. The web storage provides two mechanisms for storing data on the client.
    1. **Session storage:** It stores data for current origin with no expiration date.
    2. **Local storage:** It stores data for one session and the data is lost when the browser tab is closed.
36. ### What is a post message?
    Post message is a method that enables cross-origin communication between Window objects.(i.e, between a page and a pop-up that it spawned, or between a page and an iframe embedded within it). Generally, scripts on different pages are allowed to access each other if and only if the pages follow same-origin policy(i.e, pages share the same protocol, port number, and host).
37. ### What is a Cookie?
    A cookie is a piece of data that is stored on your computer to be accessed by your browser. Cookies are saved as key/value pairs.
    For example, you can create a cookie named username as below,
    ```javascript
    document.cookie = "username=John";
    ```
38. ### Why do you need a Cookie?
    Cookies are used to remember information about the user profile(such as username). It basically involves two steps,
    1. When a user visits a web page, user profile can be stored in a cookie.
    2. Next time the user visits the page, the cookie remembers user profile.
39. ### What are the options in a cookie?
    There are few below options available for a cookie,
    1. By default, the cookie is deleted when the browser is closed but you can change this behavior by setting expiry date (in UTC time).
    ```javascript
    document.cookie = "username=John expires=Sat, 8 Jun 2019 12:00:00 UTC";
    ```
    2. By default, the cookie belongs to a current page. But you can tell the browser what path the cookie belongs to using a path parameter.
    ```javascript
    document.cookie = "username=John path=/services";
    ```
40. ### How do you delete a cookie?
    You can delete a cookie by setting the expiry date as a passed date. You don't need to specify a cookie value in this case.
    For example, you can delete a username cookie in the current page as below.
    ```javascript
    document.cookie = "username=; expires=Fri, 07 Jun 2019 00:00:00 UTC; path=/;";
    ```
    **Note:** You should define the cookie path option to ensure that you delete the right cookie. Some browsers doesn't allow to delete a cookie unless you specify a path parameter.
41. ### What are the differences between cookie, local storage and session storage?
    Below are some of the differences between cookie, local storage and session storage,

    | Feature | Cookie | Local storage | Session storage |
    |---- | --------- | ----- | ----- |
    | Accessed on client or server side | Both server-side & client-side | client-side only | client-side only |
    | Lifetime | As configured using Expires option  | until deleted | until tab is closed |
    | SSL support | Supported | Not supported | Not supported |
    | Maximum data size | 4KB | 5 MB | 5MB |
42. ### What is the main difference between localStorage and sessionStorage?
    LocalStorage is same as SessionStorage but it persists the data even when the browser is closed and reopened(i.e it has no expiration time) whereas in sessionStorage data gets cleared when the page session ends.
43. ### How do you access web storage?
    The Window object implements the `WindowLocalStorage` and `WindowSessionStorage` objects which has `localStorage`(window.localStorage) and `sessionStorage`(window.sessionStorage) properties respectively. These properties create an instance of the Storage object, through which data items can be set, retrieved and removed for a specific domain and storage type (session or local).
    For example, you can read and write on local storage objects as below
    ```javascript
    localStorage.setItem('logo', document.getElementById('logo').value);
    localStorage.getItem('logo');
    ```
44. ### What are the methods available on session storage?
    The session storage provided methods for reading, writing and clearing the session data
    ```javascript
    // Save data to sessionStorage
    sessionStorage.setItem('key', 'value');

    // Get saved data from sessionStorage
    let data = sessionStorage.getItem('key');

    // Remove saved data from sessionStorage
    sessionStorage.removeItem('key');

    // Remove all saved data from sessionStorage
    sessionStorage.clear();
    ```
45. ### What is a storage event and its event handler?
    The StorageEvent is an event that fires when a storage area has been changed in the context of another document. Whereas onstorage property is an EventHandler for processing storage events.
    The syntax would be as below
    ```javascript
     window.onstorage = functionRef;
    ```
    Let's take the example usage of onstorage event handler which logs the storage key and it's values
    ```javascript
    window.onstorage = function(e) {
      console.log('The ' + e.key +
        ' key has been changed from ' + e.oldValue +
        ' to ' + e.newValue + '.');
    };
    ```
46. ### Why do you need web storage?
    Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance. Also, the information is never transferred to the server. Hence this is recommended approach than Cookies.
47. ### How do you check web storage browser support?
    You need to check browser support for localStorage and sessionStorage before using web storage,
    ```javascript
    if (typeof(Storage) !== "undefined") {
      // Code for localStorage/sessionStorage.
    } else {
      // Sorry! No Web Storage support..
    }
    ```
48. ### How do you check web workers browser support?
    You need to check browser support for web workers before using it
    ```javascript
    if (typeof(Worker) !== "undefined") {
      // code for Web worker support.
    } else {
      // Sorry! No Web Worker support..
    }
    ```
49. ### Give an example of web worker?
    You need to follow below steps to start using web workers for counting example
    1. Create a Web Worker File:  You need to write a script to increment the count value. Let's name it as counter.js
    ```javascript
    let i = 0;

    function timedCount() {
      i = i + 1;
      postMessage(i);
      setTimeout("timedCount()",500);
    }

    timedCount();
    ```
    Here postMessage() method is used to post a message back to the HTML page
    2. Create a Web Worker Object: You can create a web worker object by checking for browser support. Let's name this file as web_worker_example.js
    ```javascript
    if (typeof(w) == "undefined") {
      w = new Worker("counter.js");
    }
    ```
    and we can receive messages from web worker
    ```javascript
    w.onmessage = function(event){
      document.getElementById("message").innerHTML = event.data;
    };
    ```
    3. Terminate a Web Worker:
    Web workers will continue to listen for messages (even after the external script is finished) until it is terminated. You can use terminate() method to terminate listening the messages.
    ```javascript
    w.terminate();
    ```
    4. Reuse the Web Worker: If you set the worker variable to undefined you can reuse the code
    ```javascript
    w = undefined;
    ```
50. ### What are the restrictions of web workers on DOM?
    WebWorkers don't have access to below javascript objects since they are defined in an external files
    1. Window object
    2. Document object
    3. Parent object
51. ### What is a promise?
    A promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it’s not resolved(for example, network error). It will be in one of the 3 possible states: fulfilled, rejected, or pending.
    The syntax of promise would be as below
    ```javascript
    const promise = new Promise(function(resolve, reject) {
      // promise description
    })
    ```
52. ### Why do you need a promise?
    Promises are used to handle asynchronous operations. They provide an alternative approach for callbacks by reducing the callback hell and writing the cleaner code.
53. ### What are the three states of promise?
    Promises have three states:
    1. **Pending:** This is an initial state of the Promise before an operation begins
    2. **Fulfilled:** This state indicates that specified operation was completed.
    3. **Rejected:** This state indicates that the operation did not complete. In this case an error value will be thrown.
54. ### What is a callback function?
    A callback function is a function passed into another function as an argument. This function is invoked inside the outer function to complete an action.
    Let's take a simple example of how to use callback function
    ```javascript
    function callbackFunction(name) {
      console.log('Hello ' + name);
    }

    function outerFunction(callback) {
      let name = prompt('Please enter your name.');
      callback(name);
    }

    outerFunction(callbackFunction);
    ```
55. ### Why do we need callbacks?
    The callbacks are needed because javascript is a event driven language. That means instead of waiting for a response javascript will keep executing while listening for other events.
    Let's take an example with first function invoking an API call(simulated by setTimeout) and next function which logs the message.
    ```javascript
    function firstFunction(){
      // Simulate a code delay
      setTimeout( function(){
        console.log('First function called');
      }, 1000 );
    }
    function secondFunction(){
      console.log('Second function called');
    }
    firstFunction();
    secondFunction();

    Output
    // Second function called
    // First function called
    ```
    As observed from the output, javascript didn't wait for the response of first function and remaining code block get executed. So callbacks used in a way to make sure that certain code doesn’t execute until other code finished execution.
56. ### What is a callback hell?
    Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard to read and debug when dealing with asynchronous logic. The callback hell looks like below,
    ```javascript
    async1(function(){
        async2(function(){
            async3(function(){
                async4(function(){
                    ....
                });
            });
        });
    });
    ```
57. ### What is server-sent events?
    Server-sent events (SSE) is a server push technology enabling a browser to receive automatic updates from a server via HTTP connection without resorting to polling. These are a one way communications channel - events flow from server to client only. This is been used in Facebook/Twitter updates, stock price updates, news feeds etc.
58. ### How do you receive server-sent event notifications?
    The EventSource object is used to receive server-sent event notifications. For example, you can receive messages from server as below,
    ```javascript
    if(typeof(EventSource) !== "undefined") {
      var source = new EventSource("sse_generator.js");
      source.onmessage = function(event) {
        document.getElementById("output").innerHTML += event.data + "<br>";
      };
    }
    ```
59. ### How do you check browser support for server-sent events?
    You can perform browser support for server-sent events before using it as below,
    ```javascript
    if(typeof(EventSource) !== "undefined") {
      // Server-sent events supported. Let's have some code here!
    } else {
      // No server-sent events supported
    }
    ```
60. ### What are the events available for server sent events?
    Below are the list of events available for server sent events
    | Event | Description |
    |---- | ---------
    | onopen  | It is used when a connection to the server is opened |
    | onmessage | This event is used when a message is received  |
    | onerror | It happens when an error occurs|

61. ### What are the main rules of promise?
    A promise must follow a specific set of rules,
    1. A promise is an object that supplies a standard-compliant `.then()` method
    2. A pending promise may transition into either fulfilled or rejected state
    3. A fulfilled or rejected promise is settled and it must not transition into any other state.
    4. Once a promise is settled, the value must not change.
62. ### What is callback in callback?
    You can nest one callback inside in another callback to execute the actions sequentially one by one. This is known as callbacks in callbacks.
    ```javascript
    loadScript('/script1.js', function(script) {
       console.log('first script is loaded');

      loadScript('/script2.js', function(script) {

        console.log('second script is loaded');

        loadScript('/script3.js', function(script) {

            console.log('third script is loaded');
          // after all scripts are loaded
        });

      })

    });
    ```
63. ### What is promise chaining?
    The process of executing a sequence of asynchronous tasks one after another using promises is known as Promise chaining. Let's take an example of promise chaining for calculating the final result,
    ```javascript
    new Promise(function(resolve, reject) {

      setTimeout(() => resolve(1), 1000);

    }).then(function(result) {

      console.log(result); // 1
      return result * 2;

    }).then(function(result) {

      console.log(result); // 2
      return result * 3;

    }).then(function(result) {

      console.log(result); // 6
      return result * 4;

    });
    ```
    In the above handlers, the result is passed to the chain of .then() handlers with the below work flow,
    1. The initial promise resolves in 1 second,
    2. After that `.then` handler is called by logging the result(1) and then return a promise with the value of result * 2.
    3. After that the value passed to the next `.then` handler by logging the result(2) and return a promise with result * 3.
    4. Finally the value passed to the last `.then` handler by logging the result(6) and return a promise with result * 4.
64. ### What is promise.all?
    Promise.all is a promise that takes an array of promises as an input (an iterable), and it gets resolved when all the promises get resolved or any one of them gets rejected. For example, the syntax of promise.all method is below,
    ```javascript
    Promise.all([Promise1, Promise2, Promise3]) .then(result) => {   console.log(result) }) .catch(error => console.log(`Error in promises ${error}`))
    ```
    **Note:** Remember that the order of the promises(output the result) is maintained as per input order.
65. ### What is the purpose of race method in promise?
    Promise.race() method will return the promise instance which is firstly resolved or rejected. Let's take an example of race() method where promise2 is resolved first
    ```javascript
    var promise1 = new Promise(function(resolve, reject) {
        setTimeout(resolve, 500, 'one');
    });
    var promise2 = new Promise(function(resolve, reject) {
        setTimeout(resolve, 100, 'two');
    });

    Promise.race([promise1, promise2]).then(function(value) {
      console.log(value); // "two" // Both promises will resolve, but promise2 is faster
    });
    ```
66. ### What is a strict mode in javascript?
    Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a “strict” operating context. This way it prevents certain actions from being taken and throws more exceptions. The literal expression `“use strict”;` instructs the browser to use the javascript code in the Strict mode.
67. ### Why do you need strict mode?
    Strict mode is useful to write "secure" JavaScript by notifying "bad syntax" into real errors. For example, it eliminates accidentally creating a global variable by throwing an error and also throws an error for assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object.
68. ### How do you declare strict mode?
    The strict mode is declared by adding "use strict"; to the beginning of a script or a function.
    If declare at the beginning of a script, it has global scope.
    ```javascript
    "use strict";
    x = 3.14; // This will cause an error because x is not declared
    ```
    and if you declare inside a function, it has local scope
    ```javascript
    x = 3.14;       // This will not cause an error.
    myFunction();

    function myFunction() {
      "use strict";
      y = 3.14;   // This will cause an error
    }
    ```
69. ### What is the purpose of double exclamation?
    The double exclamation or negation(!!) ensures the resulting type is a boolean. If it was falsey (e.g. 0, null, undefined, etc.), it will be false, otherwise, true.
    For example, you can test IE version using this expression as below,
    ```javascript
    let isIE8 = false;
    isIE8 = !! navigator.userAgent.match(/MSIE 8.0/);
    console.log(isIE8); // returns true or false
    ```
    If you don't use this expression then it returns the original value.
    ```javascript
    console.log(navigator.userAgent.match(/MSIE 8.0/));  // returns either an Array or null
    ```
    **Note:** The expression !! is not an operator, but it is just twice of ! operator.
70. ### What is the purpose of delete operator?
    The delete keyword is used to delete the property as well as its value.
    ```javascript
    var user= {name: "John", age:20};
    delete user.age;

    console.log(user); // {name: "John"}
    ```
71. ### What is typeof operator?
    You can use the JavaScript typeof operator to find the type of a JavaScript variable. It returns the type of a variable or an expression.
    ```javascript
    typeof "John Abraham"     // Returns "string"
    typeof (1 + 2)        // Returns "number"
    ```
72. ### What is undefined property?
    The undefined property indicates that a variable has not been assigned a value, or not declared at all. The type of undefined value is undefined too.
    ```javascript
    var user;    // Value is undefined, type is undefined
    console.log(typeof(user)) //undefined
    ```
    Any variable can be emptied by setting the value to undefined.
    ```javascript
    user = undefined
    ```
73. ### What is null value?
    The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values. The type of null value is object.
    You can empty the variable by setting the value to null.
    ```javascript
    var user = null;
    console.log(typeof(user)) //object
    ```
74. ### What is the difference between null and undefined?
    Below are the main differences between null and undefined
    | Null | Undefined |
    |---- | ---------
    | It is an assignment value which indicates that variable points to no object.  | It is not an assignment value where a variable has been declared but has not yet been assigned a value. |
    | Type of null is object | Type of undefined is undefined  |
    | The null value is a primitive value that represents the null, empty, or non-existent reference. | The undefined value is a primitive value used when a variable has not been assigned a value.|
    | Indicates the absence of a value for a variable | Indicates absence of variable itself |
    | Converted to zero (0) while performing primitive operations | Converted to NaN while performing primitive operations |
75. ### What is eval?
    The eval() function evaluates JavaScript code represented as a string. The string can be a JavaScript expression, variable, statement, or sequence of statements.
    ```javascript
    console.log(eval('1 + 2')); //  3
    ```
76. ### What is the difference between window and document?
    Below are the main differences between window and document
    | Window | Document |
    |---- | ---------
    | It is the root level element in any web page  | It is the direct child of the window object. This is also known as Document Object Model(DOM) |
    | By default window object is available implicitly in the page | You can access it via window.document or document.  |
    | It has methods like alert(), confirm() and properties like document, location | It provides methods like getElementById, getElementByTagName, createElement etc  |




