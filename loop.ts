/*
LOOP FOR
*/ 
// let x = 1;
// console.log(`${x} ^ 2 = ${x * x}`);
// x = 2;
// console.log(`${x} ^ 2 = ${x * x}`);
//etc.

console.log('Computing square of a value:') //stampare il quadrato di alcuni numeri

for (let x = 1; x <= 10; x++) {
    console.log(`\t ${x} ^ 2 = ${x * x}`);
}

console.log(' ---------- ')

//CICLO FOR CON UN TUPLE
const numbers = [2, 16, 4, 12];
for (const x of numbers) {
    console.log(`\t ${x} ^ 2 = ${x * x}`);
}

console.log(' ---------- ')

/*
LOOP WHILE
*/ 

let x = 1;
while (x < 10) {
    console.log(`\t ${x} ^ 2 = ${x * x}`);
    x = x + 1; //incremento ad ogni iterazione
}
