// Les variables ont une portée limitée lorsqu'elles sont déclarées dans une fonction :

var a = function(){
    var b = 3;
}
console.log(a);
// console.log(b); //error


// Par contre il faut faire attention car si une fonction fait appel à une variable extérieur, 
// elle utilisera la valeur au moment de l'éxécution d'une fonction. C'est ce que l'on appel le contexte,
// le code à l'intérieur de la fonction disposera des variables disponible lors de son éxécution.

var a = "Salut"
var maFonction = function () {
    return a   
}
console.log(maFonction()); // "Salut"
a = "Test"
console.log(maFonction()); // "Test"


// Enfin il est aussi important de noter qu'un même nom de variable peut être utilisé dans les différentes portées.

var a = "Salut" // portée globale
var maFonction = function () {
    var a = "demo" // portée locale
    return a 
}
console.log(maFonction()) // demo 
console.log(a) // salut

// La variable a définie dans la fonction 
// n'est pas la même que la variable définie
// dans la fonction


// Les blocs (for, if...) n'ont pas de portée particulière, ainsi une variable définie dans un for ou un if est disponible en dehors de la boucle / condition.
for (var i = 0; i < 10; i++) {

}
i // 10


// hoisting

// console.log(mva);
console.log(mvaIsTheBest);
var mvaIsTheBest = 1;

var mvaIsTheBest;
console.log(mvaIsTheBest);
mvaIsTheBest = 1;


// Let & Const
// Lorsque l'on souhaite définir une variable on utilise maintenant let qui permet de définir une variable avec une portée limitée au block

if (false) {
    var a1 = 1; 
    let a2  = 2; 
}
console.log(a1); // undefined
// console.log(a2); // erreur: a2 is not defined
// A cause du hoisting, une variable déclaré via var se retrouve au niveau du scope global, ce qui n'est pas le cas de let.

// const permet de faire référence à une valeur en lecture seul.

const PI = 3.1415
// PI = 2 // erreur: PI est en lecture seul