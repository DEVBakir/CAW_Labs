const arr = [3, 5, 8];
const plus_one = arr.map(n => n + 1);
console.log(plus_one);





const double = arr => arr.map(val => val * 2);
console.log(double(arr));





var obj = {
    numbers: {
    a: 1,
    b: 2
    }
}
var { a, b } = obj.numbers; 
console.log(a, b);




const add = (a = 10, b = 10) => {
    if (a === 0) a = 0;
    if (b === 0) b = 0;
    return a + b;
};

console.log(add(3,2));
