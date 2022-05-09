function sum(x) {
    return function(y) {
        return x + y
    }
}

let f = sum(5);
console.log(f(0));

console.log(sum(2)(5));