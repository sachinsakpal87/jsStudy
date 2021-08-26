let re;
// Literal characters

re = /hello/;
re = /hello/i;

re = /^h/i; // Must start with
re = /world$/i; // Must ends with
re = /^hello World$/i; // Must begin and ends with
re = /^h.llo/i; // Matches any one character
re = /^h*llo/i; // Matches any character zero or more time

re = /gre?a?y/i; // Option e and a need to put after the char

re = /grey\?/i; // Escaping character


// String to match
// const str = 'hello World';
// const str = 'Gray';
const str = 'Grey?';

const result = re.exec(str);
console.log(result);

// Log result
function reTest(re, str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`);
    }else{
        console.log(`${str} does not match ${re.source}`);
    }
}

reTest(re,str);