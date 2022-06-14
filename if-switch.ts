let item: number = 0;

/**
 * WHILE LOOP AND IF CONDITION
*/
while (item <= 10) {
    if (item < 5) {
        console.log(`${item} ^ 2 = ${item * item}`)
    } else if (item == 5) {
        console.log("Qui il valore è 5!")
    } else {
        console.log(`${item} ^ 3 = ${item * item * item}`)
    }

    item++;
}

/**
 * BREAK & CONTINUE 
*/
// while (true) {
//     item++;

//     if (item > 20) {
//         break; //arrivato a 20 termina l'iterazione
//     }
//     if (item % 2 == 0) {
//         continue; //se il numero è pari salta l'iterazione
//     }

//     console.log(item)
// }

/**
 * SWITCH CASE
 */
// switch (item) {
//     case 0:
//         console.log("Il valore di item è 0");
//         break;
//     case 2:
//         console.log("Il valore di item è 2");
//         break;
//     case 10:
//         console.log("Il valore di item è 10");
//         break;
//     default:
//         console.log("Non conosco il valore di item.")
//         break;
// }