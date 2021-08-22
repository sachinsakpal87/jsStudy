const nums = [44,66,23,-98,76,21];
const nums1 = new Array(49,61,27,95,72,24);
const fruits = ['apple','banana','orange','pear'];
const mix = [44, 'apple', {a:1,b:4},null, undefined, true, new Date()];

console.log(nums);
console.log(nums1);
console.log(fruits);
console.log(mix);

//Get length
console.log(nums.length);

//is Array ?
console.log(Array.isArray(mix));

//Get get val at index
console.log(mix[4]);
console.log(mix[0]);

//index of
console.log(mix.indexOf({a:1,b:4}));

//Mutating arrays
console.log(nums.push(99)); //returns index at which data is pushed
console.log(nums.push(91));
console.log(nums.pop());
console.log(nums);

console.log(nums.unshift(100));
console.log(nums.unshift(101));
console.log(nums.shift());
console.log(nums);

console.log(nums.splice(0,1));  //remove the value from array start index and end index
console.log(nums);

console.log(nums.concat(nums1));
console.log(nums);


console.log(fruits.sort());


console.log(nums.unshift(100));
console.log(nums);
console.log(nums.sort());   //sort basis on first number 

console.log(nums.sort(function(x,y){    //ascending sort
    return x-y;
}));

console.log(nums.sort(function(x,y){    //reverse sort
    return y-x;
}));

// console.log(nums.sort(function(x,y){    //this will not work for -ve numbers
//     return x+y;
// }));

//find number under 50 

console.log(nums.find(function(x){
    return x<50;
}))