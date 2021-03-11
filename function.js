function PrintTrulu(){
    return 'Trululu'
}

var test = function(){
    return 'test'
    // if no return
    return undefined
}


console.log(PrintTrulu());
console.log(test());




let add = (a, b) => a+b

console.log(add(23, 4));



console.log(maFonction()) // 3
function maFonction () {
    return 3    
}


// maFonction1() // ERREUR : maFonction is not a function
// var maFonction1 = function () {
//     return 3    
// }

// La variable maFOnction est "hoistée"
var maFonction 
maFonction() // maFonction est undefined donc erreur
// L'assignation reste à sa place (après l'appel)
maFonction = function () {
    return 3    
}