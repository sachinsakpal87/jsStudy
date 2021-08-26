function iterator(collection){
    let index= 0;
    return {
        next : function(){
            return index < collection.length ?
            {value : collection[index++], done : false} :
            {done : true};
        }
    }
}

const names = ["jack", "jill", "hill"];

const itr = iterator(names);

console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);


function* generator(){
    yield "jack";
    yield "jill";
    yield "hill";
}

const itr_g = generator();

console.log(itr_g.next().value);
console.log(itr_g.next().value);
console.log(itr_g.next().value);