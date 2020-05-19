function User(name, age) {
    this.name = name;
    this.age = age;

    this.getProfile = function() {
        // Outer function context
        console.log(this.constructor.name); // User
        return function() {
            // Inner function context
            console.log(this.constructor.name); // Window
            console.log("I'm " + this.name + ", " + this.age + " yrs old");
        };
    }
}

var user = new User('John', 25);
var profile = user.getProfile();
profile(); //I'm undefined, undefined yrs old