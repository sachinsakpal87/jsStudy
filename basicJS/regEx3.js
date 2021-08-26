let re;

re = /gr[ea]y/; // Must be a or e
re = /[gf]rey/; // Must be g or f
re = /[^gf]rey/; // anything except g or f
// Here if ^ is outside the bracates then it will act as a begin with g or f but in this case its negating g or f means anything beside g or f 

const str = 'frey';

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