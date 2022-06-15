/**
 * Somma e average
*/

/* SOMMA */
// const arrayNumbers: number[] = [20, 30, 50, 40];

function sumNumber(arrayNumbers: number[]): number {
    let sum:number = 0;
    for ( let num of arrayNumbers) {
        sum += num;
    }
   return sum;
};
/* END SOMMA */

/* AVERAGE */
function avgNumber(arrayNumbers: number[]): number {
    return sumNumber(arrayNumbers) / arrayNumbers.length;
}
/* END AVERAGE */

console.log(`somma: ${sumNumber([20, 30, 50, 40])}`);
console.log(`media: ${avgNumber([20, 30, 50, 40])}`);

/**
 * Min e max
*/


//un array di numeri
const randomArray: number[] =[10, 7, 9, 45, 32, 22 ];


//dell'array stampare il valore minimo
const minNumber = (arr: number[]): number => {
    let min = arr[0];

    for (let num of arr) {
        if (num < min) {
            min = num;
        } 
    }
    return min;
}

//ed il valore massimo
const maxNumber = (arr: number[]): number => {
    let max = arr[0];

    for (let num of arr) {
        if (num > max) {
            max = num;
        } 
    }
    return max;
}

console.log(randomArray);
console.log(`minimo: ${minNumber(randomArray)}`)
console.log(`massimo: ${maxNumber(randomArray)}`)
