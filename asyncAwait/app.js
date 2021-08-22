// function sayHello(){
//     return "Hello";
// }

// console.log(sayHello());


// // Now returns promise
// async function sayHello(){
//     return "Hello";
// }

// sayHello().then(res => console.log(res));


// // Now returns promise
// async function sayHello(){
//     const promise = new Promise((resolve,reject)=> {
//         setTimeout(() => {
//             return resolve("Hello");
//         }, 1000);
//     })

//     const error = false;
//     if(!error){
//         const res = await promise;
//         return res;
//     }else{
//         await Promise.reject(new Error("Error occurred"));
//     }
    
// }

// sayHello()
// .then(res => console.log(res))
// .catch(err => console.log(err));

async function getUsers(){
const response = await fetch('https://jsonplaceholder.typicode.com/users');

const data = await response.json();

return data;
}

getUsers().then((res) => console.log(res));