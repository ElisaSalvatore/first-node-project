function hello(name: string): string {
    console.log(`hello world from ${name}`);
    return "Stringa di ritorno";
}
// hello('Elisa'); //richiamare la funzione
// const retHello1 = hello('Elisa');
// const retHello2 = hello('Luca');
// console.log(retHello1);

/* Function with enum type and default value */
function greeting(name: string, lang: 'it' | 'en' | 'es' = 'en'): string {  
    const greetMap = {
        'en': 'Hello',
        'it': 'Ciao',
        'es': 'Hola'
    }
    const greetingWord = greetMap[lang];

    return `${greetingWord} ${name}!`
}
console.log(greeting('Maria', 'es'));
console.log(greeting('Elisa', 'it'));
console.log(greeting('Alex'));

console.log('-----------------------')

/* Random number */
const random = (min: number, max:number): number => {
    return Math.round(Math.random() * (max-min) + min);
}
console.log('random number between 1 and 20:', random(20, 1))

console.log('-----------------------')

/** Funzione anonima 
 * È una funzione senza nome che non viene assegnata a nessuno.
 * Questa è una funzione che ha in ingresso altre funzioni. È una funzione di ordine superiore.
 * Andrà a stampare la prima console.log, poi eseguirà la funzione printFunction() 
 * con la funzione anonima func() al cui interno, a sua volta, è presente le funzione greeting(), 
 * con i suoi parametri, e infine stamperà a schermo il secondo console.log
*/
function printFunction(func: () => void) { //void: ritorna niente o qualsiasi cosa.
    console.log('calling function');
    func();
    console.log('function called function')
} 

printFunction(() => {
    console.log(greeting('Ludovico'))
})

console.log('-----------------------')

/**
 * Arrow functions
 * Principalmente utilizzate all'interno di array, per cercare, creare etc. all'interno di essi.
*/
const numbersList: number[] = [1, 2, 3, 4, 5];
// let squaredNumbers: number[] = [];

// for (let num of numbersList) {
//     squaredNumbers.push(num * num);
// }

/* map()
È una funzione di ordine superiore che si aggancia all'array. Map riceve in ingresso ogni valore dell'array e deve ritornare 
il valore trasformato.squaredNumbers() è un array che parte dall'array numbersList e mappa ogni suo elemento con 
il valore di ritorno.*/
const squaredNumbers = numbersList.map(num => {
    return num * num;
});

//Sintassi breve:
//const squaredNumbers = numbersList.map((num) => num * num);

/* filter() */
const oddNumbers = numbersList.filter((num) => num % 2 !== 0).map((num) => num +10);

console.log(numbersList);
console.log(squaredNumbers);
console.log(oddNumbers);

