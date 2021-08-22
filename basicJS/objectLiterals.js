const person = {
    firstName: "Sachin",
    lastName: "Sakpal",
    age : 34,
    email : "sachin.sakpal@appdirect.com",
    hobbies : ['badminton','casio'],
    address : {
        dist : 'pune',
        state : 'Maharashtra'
    },
    getBirthYear : function() {
        return 2021 - this.age;
    }
}

console.log(person);
console.log(person.hobbies[1]);
console.log(person.getBirthYear());

const people = [
    {name : 'sachin', age : 34},
    {name : 'dipti', age : 30},
    {name : 'pratibha', age : 58}
];