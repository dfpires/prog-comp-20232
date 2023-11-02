let text = "John Doe";
let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes

let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

let length = text.length;

let text2 = "We are the so-called \"Vikings\" from the north.";

let text3 = 'It\'s alright.'

let x = "John";
let y = new String("John");

if (x == y){ // compara valor
    console.log("iguais")
}
else {
    console.log("diferentes")
}

if (x === y){ // compara valor e tipo
    console.log("iguais")
}
else {
    console.log("diferentes")
}

x = y
if (x === y){ // compara valor e tipo
    console.log("iguais")
}
else {
    console.log("diferentes")
}

let text4 = "Apple, Banana, Kiwi";
let part = text4.slice(7, 13);
console.log(part)
part = text.slice(7);
console.log(part)

let str = "Apple, Banana, Kiwi";
part = str.substr(7, 6);
console.log(part)

text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

text = "Please visit Microsoft Microsoft Microsoft!";
 newText = text.replaceAll("Microsoft", "W3Schools");

 let text1 = "Hello";
 text2 = "World";
 text3 = text1.concat(" ", text2);

text1 = "      Hello World!      ";
text2 = text1.trim();

text = "HELLO WORLD";
let char = text.charAt(8);

let nomes = "pedro-julio-carlos-joão"
let vetor = nomes.split("-")

 text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");

 index = text.indexOf("w");

  text = "Please locate where 'locate' occurs!";
text.search("locate");