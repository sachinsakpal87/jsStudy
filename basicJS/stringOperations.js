let val;

val = 'sachin';

val = val.concat(' ','sakpal',' ','welcome');
console.log(val);

console.log(val[3]);    //h

console.log(val.toUpperCase());
console.log(val.toLowerCase());

console.log(val.indexOf('k'));

console.log(val.lastIndexOf('lc'));

console.log(val.charAt(8));

console.log(val.substring(1,3));    //start and end index (end index exclusive)

console.log(val.slice(1,3));

console.log(val.slice(1));  // slice first char return remaining

console.log(val.slice(-3));

var arrS = val.split(' ');
console.log(arrS);

val = val.replace('sakpal','vishwas sakpal');
console.log(val.toUpperCase());

console.log(val.includes('sachin'));
