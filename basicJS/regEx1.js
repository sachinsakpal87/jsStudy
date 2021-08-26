let re = /hello/;   // What ever goes between /<expression>/ is an expression

// re = /hello/i;
// re = /hello/g;


console.log(re);
console.log(re.source);

// exec() returns result in an array or null if not found
const result = re.exec('brand hello world hello na');
console.log(result);

console.log(result[0]);
console.log(result.index);
console.log(result.input);

// test() returns boolean found or not

const test_res = re.test('brand hello world hello na');
console.log(test_res);

//match() return result array or null (Works similar to exec)

const str = 'brad hello There';
const match_result = str.match(re);
console.log(match_result);

// search() returns the index of the first match if not found returns -1 indexOf

const search_result = str.search(re);
console.log(search_result);

// replace() replace a new string with some or all matches of a pattern

const replace_result = str.replace(re, 'Hi');
console.log(replace_result);