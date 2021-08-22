class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = new Date(dob);
    }
    greetings() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
    getsMarried(newLastName) {
        this.lastName = newLastName;
    }
    calculateAge() {
        const diff = Date.now() - this.birthDate.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }

    static addNumber(val1, val2){
        return val1+val2;
    }
}


const john = new Person('John', 'Smith', '05-12-1987');

console.log(john.greetings());
console.log(john.calculateAge());
john.getsMarried('Wiko');
console.log(john);

console.log(Person.addNumber(5,6));