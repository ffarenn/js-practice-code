// synchronous code

console.log(" I ");
console.log(" Eat ");
console.log(" Icecram ");
console.log(" With ");
console.log(" Spoon ");

// assynchronous code
console.log(" I ");
console.log(" Eat ");
setTimeout(() => {
    console.log(" Icecram ");
}, 2000)
console.log(" With ");
console.log(" Spoon ");


// regular function
function abcde(a, b, c, d) { }
// arrow function
let abcdef = (a,b,c,d,f) => {}