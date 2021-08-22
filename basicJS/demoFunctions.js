function foo(val) {
    console.log('Function foo ' + val);
}

foo('here');

const square = function (val = 3) {
    return val * val;
}

console.log(square(5));

// Immediate invokable function expression (IIFEs)


(function () {
    console.log('IIFEs run');
})();


(function (name) {
    console.log('Hello ' + name);
})('Sachin');

// PROPERTY METHODS

const todo = {
    info: function () {
        return "this is todo function";
    },
    id: function (id) {
        return `Id is ${id}`;
    }
}

todo.delete = function () {
    return "This is delete function"
};

console.log(todo.info());
console.log(todo.id(5));
console.log(todo.delete());

(()=>{
    console.log('Sachin Test');
})();