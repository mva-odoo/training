console.log('test'*4) //NaN

console.log(7 > 47) // false
console.log('7' > '47') // true like python

console.log('test'*4) //NaN

console.log(10 == 10);
console.log(10 == '10');

console.log(10 === 10);
console.log(10 === '10'); // comparaison sans s occuper du type

// Condition

// if (<booleen>) {
//     <code si vrai>
// } else if (<booleen>) {
//     <code>
// } else {
//     <code>
// }


const expr = 'Papayas';
switch (expr) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Mangoes':
    case 'Papayas':
        // if expr == Mangoes or Papayas
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;
    default:
        console.log(`Sorry, we are out of ${expr}.`);
}


// condition ? <expression si vrai> : <expression si faux>
age = 19
"Je suis " + (age >= 18 ? "majeur" : "mineur")


// loop imperative
var i = 0 
while (i < 3) {
    console.log("Je compte " + i);
    i++;
}

var eleves = ['Jean', 'Marc', 'Marie']
for (var i = 0; i < eleves.length; i++) {
    console.log(eleves[i]);
}

for (eleve of eleves){
    console.log(eleve);
}


// loop functional
eleves.forEach(eleve => {
    console.log(eleve)
});