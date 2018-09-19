/*
const catName =  'Brett';

console.log(`my cat\'s is ${catName}`);

//function within functions
console.log(Math.pow(2,64));
//function example base to the power of exponent
const power = function(base, exponent) {
    //define a variable 
    let result = 1; 
    for (let i = 0; i < exponent; i++) {
        result *= base; 

    }
    return result; 
} 

console.log(power(2,64));
*/ 

//console.log(Math.floor(Math.random() *21));

// const volumeOfCube = function (length) {
//     return length * length * length; 
// } 
// console.log(volumeOfCube(10)); 


// let coffeeTime = function makeCoffee(name, cups, order) {
//     console.log(`${name} ordered ${cups} of ${order}`);
// }

// coffeeTime('Brett', 10, 'Americano'); 

let makeCoffee= (quantity, coffeeStrength) => {
    switch(coffeeStrength) {
        case 'Strong': {console.log(`grind ${quantity *5} pounds of beans`)}
        break;

        case 'Medium': {console.log(`grind ${quantity * 3} pounds of beans`)}
    }
}
makeCoffee(3, 'Medium');
