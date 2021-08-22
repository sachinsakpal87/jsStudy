let val = '100';

if(val == 100){     // == does not checks type
    console.log('Correct');
}else{
    console.log('InCorrect');
}


if(val === 100){        // === checks type as well
    console.log('Correct');
}else{
    console.log('InCorrect');
}

// let check;
console.log(typeof check);
if(typeof check !== 'undefined'){
    console.log('Correct not undefined');
}else{
    console.log('InCorrect is undefined');
}
