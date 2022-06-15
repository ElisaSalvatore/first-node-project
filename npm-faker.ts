/**
 * NPM Node Package Manager
 * È un sistema che permette di installare e gestire delle libreria di terzi.
 * 
 * https://www.npmjs.com/package/faker/v/5.5.3
 * È una libreria che permette di avere dati fake, molto utili in fase di sviluppo.
 * 
 * Installazione:
 * - npm i faker (consigliata penultima versione, esempio npm i faker@5.5.3).
 * - importiamo nel file la libreria con `import faker from 'faker'`: avremo un errore
 *      perchè non sono presenti le dipendenze che permettono di utilizzare i tipi di TS.
 * - quindi installare le dipendeze con il comando `npm install --save-dev types/faker`.
 *      `--save-dev` serve per comunicare a npm che faker sarà una libreria che utilizzeremo 
 *      in fase di sviluppo. Non è una libreria di sistema quindi non deve essere inclusa 
 *      nel bundle finale di JS. devDepenedencies che saranno presenti solo negli ambienti di
 *      sviluppo.
*/

//import faker from 'faker';

function greet(name: string, lang: 'en' | 'it' | 'es' = 'en'): string {
    const greetMap = {
        en :"Hello",
        it: "Ciao",
        es: "Hola"
    }

    const greetingWord = greetMap[lang];

    return `${greetingWord} ${name}!`
};

// console.log(faker.name.firstName());

for (let i = 0; i < 10; i++) {
    // const randomName = faker.name.firstName();
    // const email = faker.internet.email();

    // console.log(greeting(randomName, 'es'));
    // console.log(email);
}