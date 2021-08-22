let cars = ['ford', 'polo', 'jaguar', 'benz'];

// Iterator parameter
cars.forEach(function (car) {
    console.log(car);
});

// Arrow function
cars.forEach((car) => {
    console.log(car);
})

// Iterator parameter and index
cars.forEach(function (car, index) {
    console.log(`${index} : ${car}`);
});


// Iterator parameter and index
cars.forEach(function (car, index, array) {
    console.log(`${index} : ${car}`);
    console.log(array);
});

// Maps used to loop through object of array
const users = [
    { id: 1, name: 'sachin' },
    { id: 2, name: 'vishwas' },
    { id: 3, name: 'sakpal' }
]

let ids = users.map(function(user){
    return user.id;
});

let names = users.map(function(user){
    return user.name;
});
console.log(names);

//FOR IN LOOP used for Objects only

const user = {
    firstname : 'Sachin',
    lastname : 'Sakpal',
    age : 35
}

for(i in user){
    console.log(`${i} : ${user[i]}`);
}