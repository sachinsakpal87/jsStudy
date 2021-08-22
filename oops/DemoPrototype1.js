function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = new Date (dob);
    // this.calculateAge = function (){
    //     const diff = Date.now() - this.birthDate.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear()-1970)
    // }
}
// Calculate Age
Person.prototype.calculateAge = function (){
    const diff = Date.now() - this.birthDate.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear()-1970)
}

// Get full name
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

Person.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName;
}

const john = new Person('John', 'Smith', '8-12-1990');
const mary = new Person('Mary', 'Water', 'March 20 1990');

console.log(mary);
console.log(john.calculateAge());
console.log(mary.getFullName());
mary.getsMarried('Smith');
console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));