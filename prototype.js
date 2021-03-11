var a = 1
console.log(a.__proto__)


var MyObject = {
    name: 'My Object'
}

console.log(Object.__proto__)
console.log(MyObject.__proto__)

var MySecondObject = {
    'age': 10,
}

console.log(MySecondObject.__proto__)
MySecondObject.__proto__ = MyObject
console.log(MySecondObject.__proto__)



var Eleve = {
    name: '',
    moyenne: function () {
        var somme = 0
        for (var i = 0; i < this.notes.length; i++) {
            somme += this.notes[i]
        }
        return somme / this.notes.length
    }
}

var jean = {
    name: 'Jean',
    notes: [10, 12]
}

// jean.__proto__ = Eleve // On change le prototype

var jean = Object.create(Eleve) // Crée un objet qui aura comme prototype Eleve
jean.name = 'jean'
jean.notes = [10, 12]



console.log(jean.name)
console.log(jean.moyenne()) // 11, La méthode moyenne est disponible sur le prototype et peut donc être appellée



var newEleve = function (nom) {
    this.nom = nom // On ajoutera une propriété "nom" 
}

var jean = new newEleve('Jean') // On crée une nouvelle "instance" de l'objet Eleve
console.log(jean) // {nom: 'Jean'}


// pas de hoisting pour les class
// const p = new Rectangle(); // ReferenceError
// class Rectangle {}

class animal{
    constructor (pattes = 4) {
        this.pattes = pattes
    }

    getNumberOfpattes() {
        console.log(this.pattes);
    }
    
}

class Araigne extends animal {
    constructor (pattes) {
        super(pattes)
        this.pattes = 8
    }
}

const MyannimalStrangeAnimal = new animal(10);
MyannimalStrangeAnimal.getNumberOfpattes();


const Myspider = new Araigne(10);
Myspider.getNumberOfpattes();
