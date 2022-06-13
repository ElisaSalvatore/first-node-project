console.log("Hello World")
console.log("🚀 This is my first Node Project!")

let myVar: number = 3;
myVar += 10; //13

console.log("Il valore della variabile è " + myVar)

/*
INTERFACES
Un'interfaccia è una struttura, una variabile che all'interno contiene altre variabili
*/
interface MyInterface { //type
    myNumber: Number;
    myString: String;
}

let myInterface: MyInterface = {
    myNumber: 10,
    myString: "Ciao sono una stringa"
}; 

console.log("Il valore di myNumber è", myInterface.myNumber)
console.log("Il valore di myString è", myInterface.myString)


