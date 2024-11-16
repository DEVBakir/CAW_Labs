let a = 4 ;
let b = 5 ;
[a , b] = [b , a]
console.log(a , b);


const numbers = [ 1, 2, 3 ];
const letters = [ "a", "b", "c" ]
const foods = ["mango", "pecan pie" ]
const all = [...numbers, ...letters, ...foods];
console.log(all);

function fn(a, b, ...args) {
    console.log(args);

}



fn(1,2,3,'A','B','C'); // Args = [ 3, 'A', 'B', 'C' ]
fn(1,2) ; // Args = []
let x= ['a','b','c','d'] ;
 fn(...x) ; // Args = [ 'c', 'd' ]
