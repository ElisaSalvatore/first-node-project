/**
 * Dato un array di numeri calcolare la somma e la media 
 * tramite un programma in TypeScript.
*/

const listNumbers: number[] = [1, 2, 3, 4, 5, ]

/* SUM */
    let sum: number = 0;

    //sum using for loop
        for ( let i = 0; i < listNumbers.length; i++) {
            sum += listNumbers[i];
        }
        console.log(`somma con for: ${sum}`);
    //end sum using for loop

    console.log("------------");

    //sum using for loop (method two)
        // for ( let num of listNumbers) {
        //     sum += num;
        // }
        // console.log(`somma con for (method two): ${sum}`);
    //end sum using for loop
    
    console.log("------------");

    //sum using foreach loop
        // listNumbers.forEach( function(num) {
        //     //sum = sum + number;
        //     sum += num;
        // });
        // console.log(`somma con foreach: ${sum}`);
    //end sum using foreach loop

/* END SUM */
    
console.log("------------");

/* AVERAGE */
    let average = sum / listNumbers.length;
    console.log(`media: ${average}`)
/* END AVERAGE */
