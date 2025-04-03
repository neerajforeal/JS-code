## OOP in JavaScript
OOP in JavaScript is based on four main principles:
1. **Encapsulation**
2. **Inheritance**
3. **Polymorphism**
4. **Abstraction**

Here's a comprehensive example demonstrating these concepts:
```javascript
// 1. Class Declaration - Basic building block of OOP
class Animal {
    // Constructor - initializes the object
    constructor(name, age) {
        // Properties/Attributes
        this.name = name;
        this.age = age;
        this._privateVar = 'I am private'; // Convention for private variables
    }

    // Methods
    speak() {
        return `${this.name} makes a sound`;
    }

    // Getter
    get info() {
        return `${this.name} is ${this.age} years old`;
    }

    // Setter
    set info(age) {
        if (age > 0) {
            this.age = age;
        }
    }
}

// 2. Inheritance - Dog inherits from Animal
class Dog extends Animal {
    constructor(name, age, breed) {
        // Call parent constructor
        super(name, age);
        this.breed = breed;
    }

    // Method Override (Polymorphism)
    speak() {
        return `${this.name} barks!`;
    }

    // Additional method
    fetch() {
        return `${this.name} fetches the ball`;
    }
}

// 3. Abstraction - Creating an abstract class
class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    calculateArea() {
        throw new Error("Method 'calculateArea()' must be implemented.");
    }
}

// Implementing abstract class
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

// Usage Examples:
const myDog = new Dog('Max', 3, 'Labrador');
console.log(myDog.speak());        // "Max barks!"
console.log(myDog.info);           // "Max is 3 years old"
console.log(myDog instanceof Animal); // true

const circle = new Circle(5);
console.log(circle.calculateArea()); // 78.54...
```
Let's break down the key OOP concepts:

**1. Encapsulation**

* Bundling data (properties) and methods that operate on that data within a single unit (class)
* Using getters/setters to control access to properties
* Convention of using underscore () for private variables
```javascript
class BankAccount {
    constructor() {
        this._balance = 0;  // "private" property
    }

    get balance() {
        return `$${this._balance}`;
    }

    deposit(amount) {
        this._balance += amount;
    }
}
```
**2. Inheritance**

* Allows classes to inherit properties and methods from other classes
* Uses **extends** keyword
* **super()** calls parent constructor
```javascript
class SavingsAccount extends BankAccount {
    constructor() {
        super();
        this.interestRate = 0.05;
    }

    addInterest() {
        this._balance += this._balance * this.interestRate;
    }
}
```
**3. Polymorphism**

* Objects can take multiple forms
* Same method name but different implementations in different classes
```javascript
class Cat extends Animal {
    speak() {
        return `${this.name} meows!`;  // Different from Dog's speak()
    }
}
```
**4. Abstraction**

* Hide complex implementation details
* Show only necessary features
* Can be achieved through abstract classes and interfaces (though JavaScript doesn't have built-in support for these)
```javascript
// Abstract Factory pattern example
class UIFactory {
    createButton() {
        throw new Error('Method not implemented');
    }
}

class WindowsUIFactory extends UIFactory {
    createButton() {
        return new WindowsButton();
    }
}
```
**5. Additional OOP Features in JavaScript**
```javascript
// Static methods
class MathOperations {
    static add(x, y) {
        return x + y;
    }
}
console.log(MathOperations.add(5, 3)); // 8

// Private class fields (newer JavaScript feature)
class Modern {
    #privateField = 'private';  // Truly private field
    
    getPrivateField() {
        return this.#privateField;
    }
}
```
Remember that JavaScript is prototype-based, and its OOP implementation might differ from classical OOP languages like Java or C++. However, with ES6 classes and newer features, JavaScript provides a more familiar OOP syntax while maintaining its prototype-based nature under the hood.

These concepts help in:
* Organizing code better
* Making code more maintainable
* Enabling code reuse
* Creating more robust applications