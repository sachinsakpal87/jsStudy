const personPrototype = {
    greeting : function(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried : function(newLastName){
        this.lastName = newLastName;
    }
}



const mary = Object.create(personPrototype);
mary.firstName = 'mary';
mary.lastName = 'Gitter';
mary.age = 30;

mary.getsMarried('Thomson');
console.log(mary.greeting());

const john = Object.create(personPrototype,{firstName : {value : 'John'}, lastName : {value :'SAYT'}, age: {value :33}});

console.log(john)

console.log(john.greeting())

