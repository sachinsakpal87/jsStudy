let val = 5;

console.log(val);
console.log(typeof val);
// console.log(valConv.length); do not work with number

let valConv;
valConv = String(10);       //convert number to string
console.log(valConv);
console.log(typeof valConv);
console.log(valConv.length);
console.log(val.toString());

valConv = Number('30');
console.log(valConv);
console.log(typeof valConv);
console.log(valConv.toFixed());

valConv = Number(true) ; //This will give 1
console.log(valConv);
valConv = Number(false) ; //This will give 0
console.log(valConv);
valConv = Number(null) ; //This will give 0
console.log(valConv);

valConv = Number('Hello') ; //This will give NAN
console.log(valConv);
valConv = Number([1,2,3]) ; //This will give NAN
console.log(valConv);

valConv = parseInt('30.22');
console.log(valConv);
valConv = parseFloat('130.2277777777');
console.log(valConv);
console.log(valConv.toFixed(2));


let val1, val2, sum;

val1 = 5;
val2 = 6;
sum= val1+val2;
console.log(sum);
console.log(typeof sum);

val1 = String(5);
sum= val1+val2;
console.log(sum);
console.log(typeof sum);