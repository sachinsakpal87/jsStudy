function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greeting = function(){
    return `Hello There ${this.firstName} ${this.lastName}`;
}

const john = new Person('John', 'Smith');
console.log(john.greeting());

function Customer(firstName, lastName, phone, membership){
    Person.call(this,firstName,lastName);
    this.phone = phone;
    this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

//Make Customer.Prototype return Customer
Customer.prototype.constructor = Customer
;

const cust1 = new Customer('Tom','Builder',1234,'Standerd');
console.log(cust1);

Customer.prototype.greeting = function(){
    return `Hello There ${this.firstName} Welcome to our company`;
}
console.log(cust1.greeting());