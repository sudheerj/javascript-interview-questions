    Below is the list of JavaScript Interview Questions and Answers

    -------------------------------------------------------------------
    | No. | Questions |
    |---- | ---------
    |1  | [What are the possible ways to create objects in JavaScript?](#what-are-the-possible-ways-to-create-objects-in-javascript) |
    |2  | [What is prototype chain?](#what-is-prototype-chain)|
    |3  | [What is JSON and its common operations](#what-is-json-and-its-common-operations)

### What are the possible ways to create objects in JavaScript?

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

### What is prototype chain?
    Prototype chaining is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language. The prototype on object instance is available through Object.getPrototypeOf(object) or __proto__ property whereas prototype on constructors function is available through object.prototype.

### What is the difference between Call, Apply and Bind?
    **Call:** The call() method calls a function with a given this value and arguments provided individually
    **Apply:**

### What is JSON and its common operations?

    JSON is a text-based data format following JavaScript object syntax, which was popularized by Douglas Crockford. It is useful when you want to transmit data across a network and it is basically just a text file with an extension of .json, and a MIME type of application/json
    Parsing: **Converting a string to a native object
    ```javascript
    JSON.parse(text)
    ```
    Stringification: **converting a native object to a string so it can be transmitted across the network
    ```javascript
    JSON.stringify(object)
    ```



