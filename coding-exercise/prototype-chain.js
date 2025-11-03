function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(this.name + ' makes a sound.');
};

function Dog(name) {
    Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
    console.log(this.name + ' barks.');
};

const dog = new Dog('Rex');
dog.speak(); // Rex barks.
console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true

/**
 * Explanation:
 * 
 * This demonstrates prototypal inheritance in JavaScript.
 * 
 * 1. Dog inherits from Animal using Object.create(Animal.prototype).
 * 
 * 2. Animal.call(this, name) calls the Animal constructor in the context of Dog,
 *    allowing Dog to inherit Animal's properties.
 * 
 * 3. Dog.prototype.constructor = Dog resets the constructor property after
 *    overwriting the prototype.
 * 
 * 4. Dog overrides the speak method from Animal.
 * 
 * 5. dog instanceof checks the prototype chain, so dog is an instance of both
 *    Dog and Animal.
 */
